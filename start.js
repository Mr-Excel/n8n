require('dotenv').config();

process.env.N8N_PORT = process.env.PORT || 5678;

// Start n8n
const n8n = require('n8n');
if (typeof n8n.start === 'function') {
  n8n.start();
} else {
  // Use the CLI approach since direct start() is not available
  const { spawn } = require('child_process');
  const n8nProcess = spawn('npx', ['n8n', 'start'], { stdio: 'inherit' });

  n8nProcess.on('error', (error) => {
    console.error(`Failed to start n8n: ${error.message}`);
  });
}
