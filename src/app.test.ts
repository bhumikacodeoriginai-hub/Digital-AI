import { describe, expect, it } from 'vitest'
import { modules, pathNodes } from './data'
import { allLessons, catalogModules, lessonCount } from './courseCatalog'
import { liveTopicFeed } from './lessonContent'

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
  it('ships the complete structured lesson library across every module', () => {
    expect(catalogModules).toHaveLength(11)
    expect(catalogModules.every((module) => module.topics.length > 0)).toBe(true)
    expect(lessonCount).toBe(allLessons.length)
    expect(lessonCount).toBe(161)
    expect(allLessons.every((lesson) => lesson.stages.length >= 3 && lesson.code.length > 20)).toBe(true)
    expect(allLessons.map((lesson) => lesson.title)).toEqual(expect.arrayContaining([
      'What is Artificial Intelligence?',
      'How an LLM works',
      'What is RAG?',
      'What is an AI agent?',
      'Production guardrails',
    ]))
  })

  it('provides course-owned live update signals', () => {
    expect(liveTopicFeed).toHaveLength(3)
    expect(liveTopicFeed.every((item) => item.detail.length > 20)).toBe(true)
  })
})
