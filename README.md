# www.pforderique.com

## About

This repo hosts the source files for my personal website. The website uses an Express backend and React frontend as well as a MongoDB database. Site features an api for retriving public data from the database to the client.

## Public API Documentaion

(All routes start with /api)

GET /api/profile
Params: None
Returns basic profile information like name, bio, etc.

GET /api/projects
Params: q (string, optional) filter for projects LIKE q string
Returns all projects whose names are LIKE q (returns all projects if q is not passed)
Example: /api/projects?q=app

GET /api/experiences
Params: None
Returns all experience data

GET /api/skills
Params: type (string, optional) filter by type (programming language, technology, or certificate)
Returns all skills matching type specified (if not type given, returns all skills data)
Example: /api/skills?type=technology

## Thanks for checking it out!
