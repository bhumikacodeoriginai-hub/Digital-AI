import { describe, expect, it } from 'vitest'
import { modules, pathNodes } from './data'
import { liveLessons, liveTopicFeed } from './lessonContent'

describe('learning studio curriculum data', () => {
  it('starts with foundations and keeps a connected learning path', () => {
    expect(modules[0].title).toBe('AI Foundations')
    expect(modules).toHaveLength(11)
    expect(pathNodes.map((node) => node.short)).toContain('RAG')
    expect(pathNodes.at(-1)?.short).toBe('Deploy')
  })

  it('exposes progress states for the active learner journey', () => {
    expect(modules.find((module) => module.status === 'current')?.title).toBe('Machine Learning')
    expect(modules.filter((module) => module.status === 'locked').length).toBeGreaterThan(0)
  })
})


describe('live lesson experience', () => {
  it('ships structured lesson content with visual stages and runnable examples', () => {
    expect(liveLessons.length).toBeGreaterThanOrEqual(2)
    expect(liveLessons.every((lesson) => lesson.stages.length >= 3 && lesson.code.length > 80)).toBe(true)
    expect(liveLessons.map((lesson) => lesson.title)).toContain('What is an embedding?')
  })

  it('provides course-owned live update signals', () => {
    expect(liveTopicFeed).toHaveLength(3)
    expect(liveTopicFeed.every((item) => item.detail.length > 20)).toBe(true)
  })
})
