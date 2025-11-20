import { useState, useEffect } from 'react';
import './App.css';
import NightingaleChart from './components/NightingaleChart';
import { tracks, jobTitles, jobTitleConfigurations, trackIds, categoryColorScale } from './constants';
import type { TrackId, Milestone, MilestoneMap, JobTitle } from './constants';

function App() {
  const [selectedTitle, setSelectedTitle] = useState<JobTitle>('Junior Engineer');
  const [desiredTitle, setDesiredTitle] = useState<JobTitle | null>(null);
  const [milestoneByTrack, setMilestoneByTrack] = useState<MilestoneMap>(
    jobTitleConfigurations['Junior Engineer']
  );
  const [focusedTrackId, setFocusedTrackId] = useState<TrackId>('MOBILE');
  const [expandedMilestones, setExpandedMilestones] = useState<Set<number>>(new Set());

  const desiredMilestones = desiredTitle ? jobTitleConfigurations[desiredTitle] : null;

  // Update milestone levels when job title changes
  useEffect(() => {
    setMilestoneByTrack(jobTitleConfigurations[selectedTitle]);
  }, [selectedTitle]);

  // Update expanded milestones when focused track changes
  useEffect(() => {
    const currentLevel = milestoneByTrack[focusedTrackId];
    const toExpand: number[] = [];

    // If current level is 0, expand level 1
    if (currentLevel === 0) {
      toExpand.push(1);
    } else {
      // Expand current level
      toExpand.push(currentLevel);
      // Expand next level if not at max
      if (currentLevel < 5) {
        toExpand.push(currentLevel + 1);
      }
    }

    setExpandedMilestones(new Set(toExpand));
  }, [focusedTrackId, milestoneByTrack]);

  const toggleMilestone = (level: number) => {
    setExpandedMilestones(prev => {
      const newSet = new Set(prev);
      if (newSet.has(level)) {
        newSet.delete(level);
      } else {
        newSet.add(level);
      }
      return newSet;
    });
  };

  const handleTrackMilestoneChange = (trackId: TrackId, milestone: Milestone) => {
    setMilestoneByTrack(prev => ({
      ...prev,
      [trackId]: milestone
    }));
    setFocusedTrackId(trackId);
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Engineering Growth Framework</h1>
        <p className="subtitle">
          Track and visualize your engineering career development
        </p>
      </header>

      <div className="content">
        <div className="top-section">
          <div className="left-column">
            <div className="title-selector">
              <label htmlFor="current-title">Current Role:</label>
              <select
                id="current-title"
                value={selectedTitle}
                onChange={(e) => setSelectedTitle(e.target.value as JobTitle)}
                className="title-dropdown"
              >
                {jobTitles.map(title => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
              </select>
            </div>

            <div className="tracks-overview">
          {['A', 'B', 'C', 'D'].map(category => {
            const categoryTracks = trackIds.filter(trackId => tracks[trackId].category === category);
            const categoryNames: Record<string, string> = {
              'A': 'Technical',
              'B': 'Execution',
              'C': 'Leadership',
              'D': 'Community'
            };

            return (
              <div key={category} className="track-category">
                <div className="category-label" style={{ color: categoryColorScale(category) }}>
                  {categoryNames[category]}
                </div>
                <div className="track-category-badges">
                  {categoryTracks.map(trackId => {
                    const track = tracks[trackId];
                    const currentLevel = milestoneByTrack[trackId];
                    const desiredLevel = desiredMilestones ? desiredMilestones[trackId] : null;
                    const needsGrowth = desiredLevel !== null && desiredLevel > currentLevel;
                    const isActive = trackId === focusedTrackId;

                    return (
                      <div
                        key={trackId}
                        className={`track-badge ${isActive ? 'active' : ''} ${needsGrowth ? 'needs-growth' : ''}`}
                        onClick={() => setFocusedTrackId(trackId)}
                        style={{
                          backgroundColor: categoryColorScale(track.category),
                          opacity: isActive ? 1 : 0.7
                        }}
                      >
                        <div className="track-badge-name">{track.displayName}</div>
                        <div className="track-badge-levels">
                          <span className="current-level">{currentLevel}</span>
                          {needsGrowth && desiredLevel !== null && (
                            <>
                              <span className="level-arrow">→</span>
                              <span className="target-level">{desiredLevel}</span>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
            </div>
          </div>

          <div className="right-column">
            <div className="title-selector">
              <label htmlFor="desired-title">Desired Role:</label>
              <select
                id="desired-title"
                value={desiredTitle || ''}
                onChange={(e) => setDesiredTitle(e.target.value ? e.target.value as JobTitle : null)}
                className="title-dropdown"
              >
                <option value="">None</option>
                {jobTitles.map(title => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
              </select>
            </div>

            <div className="chart-container">
              <NightingaleChart
                milestoneByTrack={milestoneByTrack}
                focusedTrackId={focusedTrackId}
                handleTrackMilestoneChangeFn={handleTrackMilestoneChange}
                targetMilestones={desiredMilestones}
              />
              {desiredMilestones && (
                <div className="chart-legend">
                  <div className="legend-item">
                    <div className="legend-indicator achieved"></div>
                    <span>Current Level</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-indicator target"></div>
                    <span>Growth Target</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="track-details">
          <div className="track-header">
            <h2>{tracks[focusedTrackId].displayName}</h2>
            <div className="track-levels-display">
              <div className="track-current-level">
                Current: Level {milestoneByTrack[focusedTrackId]}
              </div>
              {desiredMilestones && desiredMilestones[focusedTrackId] > milestoneByTrack[focusedTrackId] && (
                <div className="track-target-level">
                  Target: Level {desiredMilestones[focusedTrackId]}
                </div>
              )}
            </div>
          </div>
          <p className="track-description">{tracks[focusedTrackId].description}</p>

          {desiredMilestones && desiredMilestones[focusedTrackId] > milestoneByTrack[focusedTrackId] && (
            <div className="growth-opportunity">
              <strong>Growth Opportunity:</strong> Advance {desiredMilestones[focusedTrackId] - milestoneByTrack[focusedTrackId]} level(s) to reach your desired role.
            </div>
          )}

          <div className="milestones">
            {tracks[focusedTrackId].milestones.map((milestone, index) => {
              const level = index + 1; // Milestones are levels 1-5, not 0-4
              const isExpanded = expandedMilestones.has(level);
              const isCurrent = milestoneByTrack[focusedTrackId] === level;
              const isAchieved = milestoneByTrack[focusedTrackId] >= level;

              return (
                <div
                  key={index}
                  className={`milestone-card ${isCurrent ? 'current' : ''} ${isAchieved ? 'achieved' : ''} ${isExpanded ? 'expanded' : 'collapsed'}`}
                >
                  <div
                    className="milestone-header clickable"
                    onClick={() => toggleMilestone(level)}
                  >
                    <div className="milestone-level">
                      {level}
                    </div>
                    <div className="milestone-summary">{milestone.summary}</div>
                    <div className="milestone-toggle">
                      {isExpanded ? '−' : '+'}
                    </div>
                  </div>

                  {isExpanded && (
                    <>
                      {milestone.signals.length > 0 && (
                        <div className="milestone-section">
                          <h4>Example behaviors:</h4>
                          <ul>
                            {milestone.signals.map((signal, idx) => (
                              <li key={idx}>{signal}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {milestone.examples.length > 0 && (
                        <div className="milestone-section">
                          <h4>Example tasks:</h4>
                          <ul>
                            {milestone.examples.map((example, idx) => (
                              <li key={idx}>{example}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
