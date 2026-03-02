# Primary Workflow Specification

## Workflow Name
WhatsApp → KidKare Meal Submission

---

## Objective

Allow childcare providers to report meals using WhatsApp
instead of manually entering data into KidKare.

---

## Trigger Event

Provider sends a WhatsApp message describing meals served.

Example messages:
- "7 kids breakfast today"
- "All children had lunch"
- "No snack today"
- "John absent"

---

## Input Source

WhatsApp Webhook Event

Incoming data:
- message text
- timestamp
- provider identifier

---

## Processing Steps

1. Receive WhatsApp webhook
2. Parse message intent
3. Extract:
   - meal type
   - child count
   - service date
4. Validate against attendance data
5. Construct KidKare XML request
6. Submit to KidKare API
7. Log submission result
8. Send confirmation message

---

## Output

Successful KidKare submission.

Provider receives confirmation via WhatsApp.

---

## Constraints

- Must follow KidKare metadata schema
- XML must match API requirements
- No inferred fields allowed
- Submission must be audit-safe

---

## Success Condition

Provider completes daily meal reporting
without opening KidKare dashboard.
