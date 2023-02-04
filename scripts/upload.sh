#!/bin/bash
set -eux

# git config
git config --global user.name 'github-actions[bot]'
git config --global user.email 'github-actions[bot]@users.noreply.github.com'

mkdir -p ./"$APP_NAME"/
cp -r ../main/dist/ ./"$APP_NAME"/"$RMG_VER"/

git add .
git commit -m "Build version $APP_NAME-$RMG_VER"
{
  git push
} || {
  git pull --rebase
  git push
}
