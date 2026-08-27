---
# ─────────────────────────────────────────────────────────────────────────────
#  NEWS TEMPLATE
#
#  Two kinds of item live in this folder:
#
#  A) OUTSIDE COVERAGE — a newspaper, press release or magazine wrote about us.
#     Fill in `url`. The title on the News page links straight out to them.
#
#  B) OUR OWN ANNOUNCEMENT — something we want to say ourselves.
#     Leave `url` out entirely and write the text below the closing --- line.
#     It gets its own page on this site.
#
#  To add an item: copy this file and rename it
#      YYYY-MM-DD-a-few-words.md      e.g. 2026-09-01-new-obs-deployment.md
#  The file name sets the address of the page, so keep it short and lowercase.
#
#  Full instructions: docs/ADD-NEWS.md
# ─────────────────────────────────────────────────────────────────────────────

# The headline. For outside coverage, copy their headline exactly.
title: 'Something happened'

# The date it was published, as YYYY-MM-DD.
date: 2026-01-01

# Optional. Use this only when you genuinely do not know the full date.
#   year  -> only the year is known      month -> year and month are known
# datePrecision: year

# Who published it. For our own announcements, write: Geophysics Laboratory
outlet: 'South China Morning Post'

# Optional. The journalist or author, if the item names one.
# author: 'Jane Doe'

# The link to their article. DELETE this line for our own announcements.
url: 'https://example.com/article'

# Optional. Set this when the linked article is not in English, so screen
# readers pronounce the title correctly. One of: en, zh-Hant, zh-Hans
# lang: zh-Hant

# What sort of item this is. One of: coverage, award, announcement
kind: coverage

# Optional. One or two sentences shown under the title in the list.
# excerpt: 'A short summary in our own words.'
---

Only write here for our own announcements — the text below this line becomes
the body of the page. For outside coverage, leave this empty.
