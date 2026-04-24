const DEFAULT_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "254700000000";

export function whatsappLink(message: string, phone?: string) {
  const number = phone ?? DEFAULT_PHONE;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

export function packageInquiryLink(packageName: string, phone?: string) {
  const message = `Hello Nazareth Travel Group, I'd like pricing and available dates for: ${packageName}. Thank you.`;
  return whatsappLink(message, phone);
}

export function generalInquiryLink(phone?: string) {
  const message = `Hello Nazareth Travel Group, I'd like to learn more about your pilgrimage tours. Thank you.`;
  return whatsappLink(message, phone);
}
