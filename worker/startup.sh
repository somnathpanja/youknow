#!/bin/bash
#
# This script supports the following environment vars:
#  - WEB_MEMORY: the amount of memory each
#    process is expected to consume, in MB.
#  - NODEJS_V8_ARGS: any additional args to
#    pass to the v8 runtime.

# Replace this with the path to your main startup file.
# The `--color` flag ensures that any log output is
# correctly colorised in all environments, even those
# which inaccurately report as not supporting color.
node_args="worker.js --color"

if [[ -n "$WEB_MEMORY" ]]; then
  # The WEB_MEMORY environment variable is set.
  # Set the `mem_old_space_size` flag
  # to 4/5 of the available memory.
  # 4/5 has been determined via trial and error
  # to be the optimum value, to try and ensure
  # that v8 uses all of the available memory.
  # It's not an exact science however, and so
  # you may need to play around with this ratio.
  mem_node_old_space=$((($WEB_MEMORY*4)/5))
  node_args="--expose-gc --max-executable-size=9 --max_old_space_size=$mem_node_old_space --max-semi-space-size=2 $node_args"
fi

if [[ -n "$NODEJS_V8_ARGS" ]]; then
  # Pass any additional arguments to v8.
  node_args="$NODEJS_V8_ARGS $node_args"
fi

echo "Starting app:"
echo "> node $node_args > youknow_worker_stderr.log"

# Start the process using `exec`.
# This ensures that when node exits,
# the exit code is passed up to the
# caller of this script.
exec node $node_args