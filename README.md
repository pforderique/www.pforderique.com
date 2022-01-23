# www.pforderique.com

## About

This repo hosts the source files for my personal website. The website uses an Express backend and React frontend as well as a MongoDB database. Site features an api for retriving public data from the database to the client.

## Public API Documentaion

GET /api/profile<br />
Params: None<br />
Return: Basic profile information like name, bio, etc.

GET /api/project<br />
Params: projectid (string, required)<br />
Return: A single project whose id matches the specified projectid
Example: /api/project?projectid=8675309

GET /api/projects<br />
Params: q (string, optional) filter for projects LIKE q string<br />
Return: All projects whose names are LIKE q (returns all projects if q is not passed)<br />
Example: /api/projects?q=app

GET /api/experiences<br />
Params: None<br />
Return: All experience data

GET /api/skills<br />
Params: type (string, optional) filter by type (programming language, technology, or certificate)<br />
Return: All skills matching type specified (if not type given, returns all skills data)<br />
Example: /api/skills?type=technology

## Thanks for checking it out!
