import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';

describe('Health Check API', () => {
  it('should return 200 on /api/v1/health', async () => {
    const response = await request('http://localhost:3000')
      .get('/api/v1/health')
      .expect(200);

    expect(response.body).toHaveProperty('status', 'ok');
    expect(response.body).toHaveProperty('timestamp');
  });
});
