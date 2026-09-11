import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const [filter, setFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Application list state initialized with sample data
  const [applications, setApplications] = useState([
    {
      id: 1,
      company: "Google",
      role: "Frontend Engineer",
      status: "Interview",
      appliedDate: "3 days ago",
      location: "Mountain View, CA"
    },
    {
      id: 2,
      company: "Microsoft",
      role: "Software Engineer II",
      status: "Applied",
      appliedDate: "5 days ago",
      location: "Redmond, WA"
    },
    {
      id: 3,
      company: "Stripe",
      role: "Fullstack Developer",
      status: "Offer",
      appliedDate: "2 weeks ago",
      location: "San Francisco, CA"
    },
    {
      id: 4,
      company: "Amazon",
      role: "Backend Engineer",
      status: "Rejected",
      appliedDate: "3 weeks ago",
      location: "Seattle, WA"
    }
  ]);

  // Form State for Add Job Modal
  const [newJob, setNewJob] = useState({
    company: "",
    role: "",
    status: "Applied",
    location: ""
  });

  // Calculate dynamic stats
  const totalApps = applications.length;
  const interviewCount = applications.filter((app) => app.status === "Interview").length;
  const offerCount = applications.filter((app) => app.status === "Offer").length;
  const rejectedCount = applications.filter((app) => app.status === "Rejected").length;

  // Filtered applications
  const filteredApps = applications.filter((app) => {
    if (filter === "All") return true;
    return app.status === filter;
  });

  const handleAddJob = (e) => {
    e.preventDefault();
    if (!newJob.company.trim() || !newJob.role.trim()) {
      toast.error("Please enter both company name and role");
      return;
    }

    const createdJob = {
      id: Date.now(),
      company: newJob.company,
      role: newJob.role,
      status: newJob.status,
      appliedDate: "Just now",
      location: newJob.location || "Remote"
    };

    setApplications([createdJob, ...applications]);
    toast.success(`Application for ${newJob.company} added!`);
    setNewJob({ company: "", role: "", status: "Applied", location: "" });
    setIsModalOpen(false);
  };

  const handleDeleteJob = (id, company) => {
    setApplications(applications.filter((app) => app.id !== id));
    toast.info(`Removed ${company} application`);
  };

  const scrollToApplications = () => {
    const section = document.getElementById("dashboard-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Interview":
        return "bg-blue-100 text-blue-700 border border-blue-200";
      case "Offer":
        return "bg-emerald-100 text-emerald-700 border border-emerald-200";
      case "Rejected":
        return "bg-rose-100 text-rose-700 border border-rose-200";
      default:
        return "bg-slate-100 text-slate-700 border border-slate-200";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-16">

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6">
            Welcome back, {user?.name || "Job Hunter"}! 🚀
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            Take full control of <br />
            <span className="text-blue-600">your job search.</span>
          </h1>

          <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Track applications, monitor interview schedules, and land your dream job with ease.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md hover:shadow-lg transition duration-200 cursor-pointer flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              + Add New Application
            </button>

            <button
              onClick={scrollToApplications}
              className="px-6 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-semibold shadow-xs transition duration-200 cursor-pointer"
            >
              View Dashboard ↓
            </button>
          </div>
        </div>
      </section>

      {/* ================= DASHBOARD SECTION ================= */}
      <section id="dashboard-section" className="max-w-5xl mx-auto px-6 pt-8 pb-16">
        <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm p-6 md:p-8">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Applications Dashboard</h2>
              <p className="text-sm text-slate-500 mt-1">Manage and update your active job search pipelines</p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl shadow-xs transition cursor-pointer flex items-center gap-1.5 self-start sm:self-auto"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Add Job
            </button>
          </div>

          {/* Stats Cards / Filter Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <button
              onClick={() => setFilter("All")}
              className={`p-4 rounded-xl border transition text-left cursor-pointer ${
                filter === "All"
                  ? "bg-slate-900 text-white border-slate-900 shadow-md"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200"
              }`}
            >
              <p className={`text-xs font-medium ${filter === "All" ? "text-slate-300" : "text-slate-500"}`}>
                Total Applications
              </p>
              <p className="text-3xl font-extrabold mt-1">{totalApps}</p>
            </button>

            <button
              onClick={() => setFilter("Interview")}
              className={`p-4 rounded-xl border transition text-left cursor-pointer ${
                filter === "Interview"
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-blue-50/70 hover:bg-blue-100/70 text-blue-900 border-blue-200"
              }`}
            >
              <p className={`text-xs font-medium ${filter === "Interview" ? "text-blue-100" : "text-blue-600"}`}>
                Interviews
              </p>
              <p className="text-3xl font-extrabold mt-1">{interviewCount}</p>
            </button>

            <button
              onClick={() => setFilter("Offer")}
              className={`p-4 rounded-xl border transition text-left cursor-pointer ${
                filter === "Offer"
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-md"
                  : "bg-emerald-50/70 hover:bg-emerald-100/70 text-emerald-900 border-emerald-200"
              }`}
            >
              <p className={`text-xs font-medium ${filter === "Offer" ? "text-emerald-100" : "text-emerald-600"}`}>
                Offers Received
              </p>
              <p className="text-3xl font-extrabold mt-1">{offerCount}</p>
            </button>

            <button
              onClick={() => setFilter("Rejected")}
              className={`p-4 rounded-xl border transition text-left cursor-pointer ${
                filter === "Rejected"
                  ? "bg-rose-600 text-white border-rose-600 shadow-md"
                  : "bg-rose-50/70 hover:bg-rose-100/70 text-rose-900 border-rose-200"
              }`}
            >
              <p className={`text-xs font-medium ${filter === "Rejected" ? "text-rose-100" : "text-rose-600"}`}>
                Rejected
              </p>
              <p className="text-3xl font-extrabold mt-1">{rejectedCount}</p>
            </button>
          </div>

          {/* Applications List */}
          <div className="space-y-3">
            {filteredApps.length === 0 ? (
              <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                <p className="text-slate-500 font-medium">No applications found in this category.</p>
                <button
                  onClick={() => setFilter("All")}
                  className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-semibold cursor-pointer"
                >
                  View All Applications
                </button>
              </div>
            ) : (
              filteredApps.map((app) => (
                <div
                  key={app.id}
                  className="p-5 border border-slate-200 rounded-xl bg-white hover:border-slate-300 transition duration-150 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-lg text-slate-900">{app.company}</h3>
                      <span className="text-xs text-slate-400">• {app.location}</span>
                    </div>
                    <p className="text-sm font-medium text-slate-600 mt-0.5">{app.role}</p>
                    <p className="text-xs text-slate-400 mt-1">Applied: {app.appliedDate}</p>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(app.status)}`}>
                      {app.status}
                    </span>

                    <button
                      onClick={() => handleDeleteJob(app.id, app.company)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition cursor-pointer"
                      title="Delete application"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ================= ADD JOB MODAL ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 border border-slate-200 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-bold text-slate-900">Add New Application</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddJob} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Company Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Google, Apple"
                  value={newJob.company}
                  onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none text-slate-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Role Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior React Engineer"
                  value={newJob.role}
                  onChange={(e) => setNewJob({ ...newJob, role: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none text-slate-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
                <input
                  type="text"
                  placeholder="e.g. Remote / New York, NY"
                  value={newJob.location}
                  onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none text-slate-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                <select
                  value={newJob.status}
                  onChange={(e) => setNewJob({ ...newJob, status: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none text-slate-900"
                >
                  <option value="Applied">Applied</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition shadow-xs cursor-pointer"
                >
                  Save Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;