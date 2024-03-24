test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response).not.toBeNull();
  expect(response.status).toBe(200);
  
  const body = await response.json();
  const parsedUpdatedAt = new Date(body.updated_at).toISOString()
  const max_connections = body.dependencies.database.max_connections
  const opened_connections = body.dependencies.database.opened_connections
  const version = body.dependencies.database.version

  expect(body.updated_at).toBe(parsedUpdatedAt);
  expect(typeof max_connections).toBe('number');
  expect(typeof opened_connections).toBe('number');
  expect(typeof version).toBe('number');
  expect(opened_connections).toBe(1);
});