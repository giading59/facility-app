import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft, Calendar as CalendarIcon, Package, TrendingUp, Download } from "lucide-react";
import { motion } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function OrderSchedule() {
  const [selectedMonth, setSelectedMonth] = useState("April 2026");

  const scheduledOrders = [
    {
      id: 1,
      date: "12 Apr 2026",
      day: "Sonntag",
      items: "45 kg Salat Mix",
      location: "3 Standorte",
      status: "Bestätigt",
      total: "€ 425.50"
    },
    {
      id: 2,
      date: "14 Apr 2026",
      day: "Dienstag",
      items: "60 kg Gemüse & Beilagen",
      location: "3 Standorte",
      status: "Bestätigt",
      total: "€ 580.00"
    },
    {
      id: 3,
      date: "16 Apr 2026",
      day: "Donnerstag",
      items: "38 kg Salat Mix",
      location: "2 Standorte",
      status: "Ausstehend",
      total: "€ 362.40"
    },
    {
      id: 4,
      date: "19 Apr 2026",
      day: "Sonntag",
      items: "52 kg Gemüse Mix",
      location: "3 Standorte",
      status: "Entwurf",
      total: "€ 495.20"
    }
  ];

  const monthlyData = [
    { month: "Okt", kg: 120, cost: 1250 },
    { month: "Nov", kg: 145, cost: 1520 },
    { month: "Dez", kg: 135, cost: 1410 },
    { month: "Jan", kg: 158, cost: 1650 },
    { month: "Feb", kg: 142, cost: 1480 },
    { month: "Mär", kg: 165, cost: 1725 },
    { month: "Apr", kg: 195, cost: 2040 }
  ];

  return (
    <div className="size-full bg-[#F8F9FA] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-[#2A1F5B] border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/facility-dashboard" className="text-white/70 hover:text-white">
                <ChevronLeft size={24} />
              </Link>
              <div>
                <h1 className="text-xl text-white">Bestellkalender & Statistiken</h1>
                <p className="text-sm text-white/70">Planung & Verbrauchsanalyse</p>
              </div>
            </div>
            <button className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl hover:bg-white/20 transition-colors text-white">
              <Download size={18} />
              <span className="text-sm">Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-6 py-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-neutral-500 text-sm mb-2">Monatlicher Verbrauch</p>
                  <p className="text-3xl text-[#2A1F5B]">195 kg</p>
                </div>
                <div className="bg-[#9DD3A0] p-3 rounded-xl">
                  <Package className="text-white" size={24} />
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#9DD3A0]">
                <TrendingUp size={14} />
                <span>+18% vs. letzten Monat</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-neutral-500 text-sm mb-2">Monatliche Kosten</p>
                  <p className="text-3xl text-[#2A1F5B]">€ 2,040</p>
                </div>
                <div className="bg-[#5FA8B8] p-3 rounded-xl">
                  <TrendingUp className="text-white" size={24} />
                </div>
              </div>
              <div className="text-xs text-neutral-500">
                Durchschnitt: € 10.46/kg
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-neutral-500 text-sm mb-2">Anstehende Bestellungen</p>
                  <p className="text-3xl text-[#2A1F5B]">4</p>
                </div>
                <div className="bg-[#2A1F5B] p-3 rounded-xl">
                  <CalendarIcon className="text-white" size={24} />
                </div>
              </div>
              <div className="text-xs text-neutral-500">
                Nächste Lieferung: Morgen
              </div>
            </motion.div>
          </div>

          {/* Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg mb-6 text-[#2A1F5B]">Verbrauchstrend (kg)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e5e5",
                    borderRadius: "8px"
                  }}
                />
                <Bar dataKey="kg" fill="#5FA8B8" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Scheduled Orders */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg text-[#2A1F5B]">Geplante Bestellungen</h2>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="px-4 py-2 rounded-xl bg-neutral-50 border border-neutral-200 text-sm outline-none"
              >
                <option>April 2026</option>
                <option>Mai 2026</option>
                <option>Juni 2026</option>
              </select>
            </div>

            <div className="space-y-3">
              {scheduledOrders.map((order, index) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-neutral-200 rounded-xl p-4 hover:border-[#9DD3A0] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      {/* Date Box */}
                      <div className="bg-[#F8F9FA] rounded-xl p-3 text-center min-w-[70px]">
                        <p className="text-xs text-neutral-500 mb-1">{order.day}</p>
                        <p className="text-sm text-[#2A1F5B]">{order.date.split(' ')[0]} {order.date.split(' ')[1]}</p>
                      </div>

                      {/* Order Details */}
                      <div>
                        <h3 className="text-sm mb-2 text-[#2A1F5B]">{order.items}</h3>
                        <div className="flex items-center gap-4 text-xs text-neutral-500">
                          <span className="flex items-center gap-1">
                            <Package size={12} />
                            {order.location}
                          </span>
                          <span className="text-[#9DD3A0]">{order.total}</span>
                        </div>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      order.status === "Bestätigt"
                        ? "bg-[#9DD3A0]/20 text-[#9DD3A0]"
                        : order.status === "Ausstehend"
                        ? "bg-[#EDE9A3]/60 text-[#2A1F5B]"
                        : "bg-neutral-100 text-neutral-700"
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/bulk-order"
              className="w-full mt-4 border-2 border-dashed border-neutral-300 rounded-xl py-4 text-sm text-neutral-400 hover:border-[#9DD3A0] hover:text-[#9DD3A0] transition-colors flex items-center justify-center"
            >
              + Neue Bestellung planen
            </Link>
          </div>

          {/* Price Breakdown */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg mb-4 text-[#2A1F5B]">Preisübersicht pro kg</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-[#F8F9FA] rounded-xl border border-[#9DD3A0]/30">
                <div>
                  <p className="text-sm mb-1 text-[#2A1F5B]">Hauptspeise (Salat)</p>
                  <p className="text-xs text-neutral-400">Premium Mix, Bio-Qualität</p>
                </div>
                <p className="text-[#9DD3A0]">€ 12.50/kg</p>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#F8F9FA] rounded-xl border border-[#5FA8B8]/30">
                <div>
                  <p className="text-sm mb-1 text-[#2A1F5B]">Grummes Gemüse</p>
                  <p className="text-xs text-neutral-400">Saisonale Gemüse Mix</p>
                </div>
                <p className="text-[#5FA8B8]">€ 8.90/kg</p>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#F8F9FA] rounded-xl border border-[#EDE9A3]/60">
                <div>
                  <p className="text-sm mb-1 text-[#2A1F5B]">Beilagen</p>
                  <p className="text-xs text-neutral-400">Pasta, Reis, Kartoffeln</p>
                </div>
                <p className="text-[#2A1F5B]">€ 6.50/kg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
