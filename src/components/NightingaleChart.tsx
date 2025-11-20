import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import { trackIds, milestones, tracks, categoryColorScale } from '../constants'
import type { TrackId, Milestone, MilestoneMap } from '../constants'

const width = 400
const arcMilestones = milestones.slice(1) // we'll draw the '0' milestone with a circle, not an arc.

interface Props {
  milestoneByTrack: MilestoneMap
  focusedTrackId: TrackId
  handleTrackMilestoneChangeFn: (trackId: TrackId, milestone: Milestone) => void
  targetMilestones?: MilestoneMap | null
}

const NightingaleChart: React.FC<Props> = ({
  milestoneByTrack,
  focusedTrackId,
  handleTrackMilestoneChangeFn,
  targetMilestones
}) => {
  const svgRef = useRef<SVGSVGElement>(null)

  const radiusScale = d3.scaleBand()
    .domain(arcMilestones.map(String))
    .range([0.15 * width, 0.45 * width])
    .paddingInner(0.1)

  const arcFn = d3.arc<number>()
    .innerRadius((milestone: number) => radiusScale(String(milestone)) || 0)
    .outerRadius((milestone: number) => (radiusScale(String(milestone)) || 0) + (radiusScale.bandwidth() || 0))
    .startAngle(-Math.PI / trackIds.length)
    .endAngle(Math.PI / trackIds.length)
    .padAngle(Math.PI / 200)
    .padRadius(0.45 * width)
    .cornerRadius(2)

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2},${width / 2}) rotate(-33.75)`)

    trackIds.forEach((trackId, i) => {
      const isCurrentTrack = trackId === focusedTrackId
      const trackGroup = g.append('g')
        .attr('transform', `rotate(${i * 360 / trackIds.length})`)

      arcMilestones.forEach((milestone) => {
        const isCurrentMilestone = isCurrentTrack && milestone === milestoneByTrack[focusedTrackId]
        const isMet = milestoneByTrack[trackId] >= milestone || milestone === 0
        const isTarget = targetMilestones && targetMilestones[trackId] >= milestone && !isMet
        const isGrowthOpportunity = targetMilestones && targetMilestones[trackId] > milestoneByTrack[trackId]

        trackGroup.append('path')
          .attr('class', `track-milestone ${isMet ? 'is-met' : ''} ${isCurrentMilestone ? 'track-milestone-current' : ''} ${isTarget ? 'is-target' : ''}`)
          .attr('d', arcFn(milestone) || '')
          .style('fill', isMet ? categoryColorScale(tracks[trackId].category) : (isTarget ? 'rgba(255, 193, 7, 0.3)' : '#eee'))
          .style('cursor', 'pointer')
          .style('stroke', isGrowthOpportunity && (isMet || isTarget) ? '#ffc107' : undefined)
          .style('stroke-width', isGrowthOpportunity && (isMet || isTarget) ? '2px' : undefined)
          .on('click', () => handleTrackMilestoneChangeFn(trackId, milestone))
      })

      const currentMilestoneId = milestoneByTrack[focusedTrackId]
      trackGroup.append('circle')
        .attr('r', 8)
        .attr('cx', 0)
        .attr('cy', -50)
        .style('fill', categoryColorScale(tracks[trackId].category))
        .attr('class', `track-milestone ${isCurrentTrack && !currentMilestoneId ? 'track-milestone-current' : ''}`)
        .style('cursor', 'pointer')
        .on('click', () => handleTrackMilestoneChangeFn(trackId, 0))
    })
  }, [milestoneByTrack, focusedTrackId, handleTrackMilestoneChangeFn, arcFn, radiusScale, targetMilestones])

  return (
    <figure style={{ margin: 0 }}>
      <style>{`
        .track-milestone {
          fill: #eee;
          cursor: pointer;
        }
        .track-milestone-current,
        .track-milestone:hover {
          stroke: #000;
          stroke-width: 4px;
          stroke-linejoin: round;
        }
      `}</style>
      <svg
        ref={svgRef}
        width={width}
        height={width}
      />
    </figure>
  )
}

export default NightingaleChart

