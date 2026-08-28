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

# ── Picture ──────────────────────────────────────────────────────────────────
# Optional, but an item with a picture reads far better in the list.
#
# Put the image file in  src/assets/news/  and name it after this file, then
# point at it the same way as below. Landscape works best; it is shown as a
# small 4:3 thumbnail, so avoid dense multi-panel figures — they turn into an
# unreadable smudge at that size. A photograph almost always beats a figure.
#
# image: ../../assets/news/2026-01-01-something-happened.jpg
#
# Describe the picture for people who cannot see it. Say what is in the frame,
# not "photo of news article". Required whenever you set `image`.
# imageAlt: 'Two researchers on a ship deck beside a yellow ocean-bottom seismometer.'
#
# Who the picture belongs to. Set this for ANY picture that is not ours — a
# press photo, an agency image, a colleague's field photograph. It is printed
# under the thumbnail exactly as you write it, so keep it to a few words.
# imageCredit: 'Photo: SCMP'
---

Only write here for our own announcements — the text below this line becomes
the body of the page. For outside coverage, leave this empty.
