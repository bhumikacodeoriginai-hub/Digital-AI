import { describe, expect, it } from 'vitest'
import { modules, pathNodes } from './data'

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
