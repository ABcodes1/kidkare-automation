# AGENTS.md — KidKare Automation

## Project Overview
This project builds an automation bridge between WhatsApp and KidKare.

Childcare providers communicate operational data through WhatsApp messages.
The system parses provider intent and submits structured data to KidKare APIs.

Primary workflow:

Provider WhatsApp Message
→ Webhook Intake
→ Intent Parsing Layer
→ KidKare API Submission

---

## Current Progress (Checkpoint)

✅ Node.js project initialized  
✅ Git repository created  
✅ Environment variables configured via `.env`  
✅ Meta App created  
✅ WhatsApp Business Platform enabled  
✅ KidKare API metadata stored locally under `/docs/kidkare`  

Environment variables available:

- META_APP_ID
- META_APP_SECRET
- WHATSAPP_VERIFY_TOKEN

dotenv is installed and working.

---

## Repository Structure
