import sys
from engine.yt_summarizer import YoutubeSummarizer

yts = YoutubeSummarizer()
yts.create_document(sys.argv[1])