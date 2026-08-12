#!/bin/bash

# ==============================================================================
# KRISALA AVENTIS — PERMANENT OMNIPRESENT INDEXING CRON
# ==============================================================================

# Setup Environment
export PATH=$PATH:/usr/local/bin:/opt/homebrew/bin
cd /Users/vikasyewle/krisalaaventis/indexing-automation

# Log file
LOG_FILE="/Users/vikasyewle/krisalaaventis/scratch/cron_indexing.log"

echo "=====================================================" >> $LOG_FILE
echo "Sovereign Sweep Initiated: $(date)" >> $LOG_FILE

# 1. Execute Google Indexing API
echo ">> Running Google Indexing Protocol..." >> $LOG_FILE
node index-push.js >> $LOG_FILE 2>&1

# 2. Execute IndexNow Protocol (Bing, Yahoo, DuckDuckGo, Yandex)
echo ">> Running IndexNow Protocol..." >> $LOG_FILE
python3 indexnow-push.py >> $LOG_FILE 2>&1

echo "Sovereign Sweep Completed: $(date)" >> $LOG_FILE
echo "=====================================================" >> $LOG_FILE
