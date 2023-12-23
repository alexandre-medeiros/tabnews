test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response).not.toBeNull();
  expect(response.status).toBe(200);
  
  const body = await response.json();
  const parsedUpdatedAt = new Date(body.updated_at).toISOString()
  const max_connections = body.dependencies.database.max_connections
  const openned_connections = body.dependencies.database.openned_connections
  const version = body.dependencies.database.version

  expect(body.updated_at).toBe(parsedUpdatedAt);
  expect(typeof max_connections).toBe('number');
  expect(typeof openned_connections).toBe('number');
  expect(typeof version).toBe('number');
  expect(openned_connections).toBe(1);
});