# Node.js HTTP Server Memory Leak

This repository demonstrates a common error in Node.js HTTP servers that can lead to memory leaks. The issue occurs when the server is not properly closed after it's started.  This can result in the server continuing to consume memory even after it is no longer serving requests.

## Bug

The `bug.js` file contains the problematic code. The HTTP server is started but never closed, leading to a memory leak.

## Solution

The `bugSolution.js` file provides a corrected version.  The server is properly closed using the `server.close()` method after a short delay, preventing the memory leak.