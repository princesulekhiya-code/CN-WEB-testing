"use client";

import { Fragment, useEffect, useState } from "react";
import { Loader2, ChevronDown } from "lucide-react";
import { getContacts, type AdminContact } from "@/lib/api/services/admin.service";

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<AdminContact[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    getContacts().then(setContacts).catch(() => {}).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center py-32"><Loader2 className="w-8 h-8 animate-spin text-[#4EB3E8]" /></div>;
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white">Contact Inquiries</h1>
        <p className="text-sm text-black/45 dark:text-white/40 mt-0.5">{contacts.length} inquiries received</p>
      </div>

      <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#111] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-black/[0.06] dark:border-white/[0.06]">
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-black/40 dark:text-white/35 uppercase tracking-wider">Name</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-black/40 dark:text-white/35 uppercase tracking-wider hidden md:table-cell">Email</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-black/40 dark:text-white/35 uppercase tracking-wider hidden lg:table-cell">Phone</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-black/40 dark:text-white/35 uppercase tracking-wider hidden lg:table-cell">Interested In</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-black/40 dark:text-white/35 uppercase tracking-wider hidden sm:table-cell">Date</th>
                <th className="text-right px-5 py-3.5 text-xs font-semibold text-black/40 dark:text-white/35 uppercase tracking-wider">Details</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment key={contact.id}>
                  <tr className="border-b border-black/[0.04] dark:border-white/[0.04] hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-colors cursor-pointer" onClick={() => setExpanded(expanded === contact.id ? null : contact.id)}>
                    <td className="px-5 py-4">
                      <div className="font-semibold text-black dark:text-white">{contact.fullName}</div>
                      {contact.companyName && <div className="text-xs text-black/35 dark:text-white/30 mt-0.5">{contact.companyName}</div>}
                    </td>
                    <td className="px-5 py-4 text-xs text-black/50 dark:text-white/40 hidden md:table-cell">{contact.email}</td>
                    <td className="px-5 py-4 text-xs text-black/50 dark:text-white/40 hidden lg:table-cell">
                      {contact.phone ? (
                        <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="text-[#4EB3E8] hover:underline">{contact.phone}</a>
                      ) : (
                        <span className="text-black/20 dark:text-white/15"> - </span>
                      )}
                    </td>
                    <td className="px-5 py-4 hidden lg:table-cell">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-[#4EB3E8]/10 text-[#4EB3E8] font-semibold">{contact.interestedIn}</span>
                    </td>
                    <td className="px-5 py-4 text-xs text-black/40 dark:text-white/35 hidden sm:table-cell">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-5 py-4 text-right">
                      <ChevronDown className={`w-4 h-4 text-black/30 dark:text-white/25 inline transition-transform duration-200 ${expanded === contact.id ? "rotate-180" : ""}`} />
                    </td>
                  </tr>
                  {expanded === contact.id && (
                    <tr key={`${contact.id}-detail`} className="border-b border-black/[0.04] dark:border-white/[0.04]">
                      <td colSpan={6} className="px-5 py-4 bg-black/[0.01] dark:bg-white/[0.01]">
                        <div className="grid sm:grid-cols-2 gap-4 text-xs">
                          <div>
                            <span className="font-semibold text-black/50 dark:text-white/40">Email:</span>{" "}
                            <a href={`mailto:${contact.email}`} className="text-[#4EB3E8] hover:underline">{contact.email}</a>
                          </div>
                          {contact.phone && (
                            <div>
                              <span className="font-semibold text-black/50 dark:text-white/40">Phone:</span>{" "}
                              <span>{contact.phone}</span>
                            </div>
                          )}
                          {contact.estimatedBudget && (
                            <div>
                              <span className="font-semibold text-black/50 dark:text-white/40">Budget:</span>{" "}
                              <span>{contact.estimatedBudget}</span>
                            </div>
                          )}
                          {contact.heardFrom && (
                            <div>
                              <span className="font-semibold text-black/50 dark:text-white/40">Heard From:</span>{" "}
                              <span>{contact.heardFrom}</span>
                            </div>
                          )}
                          <div className="sm:col-span-2">
                            <span className="font-semibold text-black/50 dark:text-white/40">Project Details:</span>
                            <p className="mt-1 text-black/70 dark:text-white/60 leading-relaxed whitespace-pre-wrap">{contact.projectDetails}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
              {contacts.length === 0 && (
                <tr><td colSpan={6} className="px-5 py-16 text-center text-sm text-black/30 dark:text-white/25">No contact inquiries yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
