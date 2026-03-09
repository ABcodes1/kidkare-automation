require("dotenv").config();

console.log("META_APP_ID:", process.env.META_APP_ID ? "✅ loaded" : "❌ missing");
console.log("META_APP_SECRET:", process.env.META_APP_SECRET ? "✅ loaded" : "❌ missing");
console.log("WHATSAPP_VERIFY_TOKEN:", process.env.WHATSAPP_VERIFY_TOKEN ? "✅ loaded" : "❌ missing");