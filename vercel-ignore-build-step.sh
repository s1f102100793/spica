#!/bin/bash
echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"
if [[ "$VERCEL_GIT_COMMIT_REF" == "gh-pages" ]] ; then
  # Don't build for 'gh-pages' branch
  echo "🛑 - Build cancelled for gh-pages branch"
  exit 0;
else
  # Proceed with the build for other branches
  echo "✅ - Build can proceed"
  exit 1;
fi
