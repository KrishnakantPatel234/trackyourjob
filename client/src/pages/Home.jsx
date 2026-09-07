import React from "react";
import { useNavigate } from "react-router";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* <Navbar /> */}


      {/* ================= HERO SECTION ================= */}

      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">

        <div className="max-w-3xl mx-auto text-center">

          <div
            className="inline-flex items-center px-3 py-1
                       rounded-full bg-blue-50
                       border border-blue-100
                       text-blue-600 text-sm font-medium mb-6"
          >
            Your job search, organized.
          </div>

          <h1
            className="text-5xl md:text-6xl font-bold
                       tracking-tight leading-tight"
          >
            Stop wondering
            <br />

            <span className="text-blue-600">
              where you stand.
            </span>
          </h1>

          <p
            className="mt-6 text-lg text-slate-500
                       leading-relaxed max-w-2xl mx-auto"
          >
            Track every job application, keep up with
            interview rounds, and know exactly where you
            stand in your job search — all in one place.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">

            <button
              onClick={() => navigate("/register")}
              className="px-6 py-3 rounded-lg
                         bg-blue-600 hover:bg-blue-700
                         text-white font-semibold
                         transition cursor-pointer"
            >
              Start Tracking →
            </button>

            <button
              onClick={() => navigate("/login")}
              className="px-6 py-3 rounded-lg
                         border border-slate-300
                         bg-white hover:bg-slate-50
                         text-slate-700 font-semibold
                         transition cursor-pointer"
            >
              Login
            </button>

          </div>

        </div>

      </section>


      {/* ================= DASHBOARD PREVIEW ================= */}

      <section className="max-w-5xl mx-auto px-6 pb-20">

        <div
          className="bg-white border border-slate-200
                     rounded-2xl shadow-lg p-6"
        >

          {/* Header */}

          <div className="flex items-center justify-between mb-6">

            <div>
              <h2 className="font-semibold text-slate-900">
                Your Applications
              </h2>

              <p className="text-sm text-slate-400 mt-1">
                Keep track of your job search
              </p>
            </div>

            <div
              className="px-3 py-2 bg-blue-50
                         text-blue-600 text-sm
                         font-medium rounded-lg"
            >
              + Add Job
            </div>

          </div>


          {/* Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <div className="p-4 rounded-xl bg-slate-50">
              <p className="text-sm text-slate-500">
                Applications
              </p>

              <p className="text-2xl font-bold mt-1">
                24
              </p>
            </div>


            <div className="p-4 rounded-xl bg-blue-50">
              <p className="text-sm text-blue-600">
                Interviews
              </p>

              <p className="text-2xl font-bold mt-1 text-blue-700">
                6
              </p>
            </div>


            <div className="p-4 rounded-xl bg-green-50">
              <p className="text-sm text-green-600">
                Offers
              </p>

              <p className="text-2xl font-bold mt-1 text-green-700">
                2
              </p>
            </div>


            <div className="p-4 rounded-xl bg-slate-50">
              <p className="text-sm text-slate-500">
                Rejected
              </p>

              <p className="text-2xl font-bold mt-1">
                8
              </p>
            </div>

          </div>


          {/* Application */}

          <div
            className="mt-5 border border-slate-200
                       rounded-xl p-4 flex items-center
                       justify-between"
          >

            <div>

              <h3 className="font-semibold">
                Google
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                Frontend Developer · Applied 3 days ago
              </p>

            </div>

            <span
              className="px-3 py-1.5 rounded-full
                         bg-blue-50 text-blue-600
                         text-sm font-medium"
            >
              Technical Interview
            </span>

          </div>

        </div>

      </section>


      {/* ================= FEATURES SECTION ================= */}

      <section className="bg-white border-y border-slate-200">

        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="text-center max-w-2xl mx-auto">

            <p
              className="text-sm font-semibold text-blue-600
                         uppercase tracking-wider"
            >
              Why TrackYourJob?
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Your entire job search in one place
            </h2>

            <p className="mt-4 text-slate-500">
              Applying to multiple companies can quickly
              become difficult to manage. TrackYourJob
              keeps everything organized.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6 mt-12">

            {/* Feature 1 */}

            <div
              className="p-6 rounded-2xl
                         border border-slate-200
                         bg-slate-50"
            >

              <div
                className="w-11 h-11 rounded-xl
                           bg-blue-100 text-blue-600
                           flex items-center justify-center
                           font-bold text-lg"
              >
                +
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Track Applications
              </h3>

              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Save the companies you've applied to,
                the role, application date, and other
                important details.
              </p>

            </div>


            {/* Feature 2 */}

            <div
              className="p-6 rounded-2xl
                         border border-slate-200
                         bg-slate-50"
            >

              <div
                className="w-11 h-11 rounded-xl
                           bg-blue-100 text-blue-600
                           flex items-center justify-center
                           font-bold text-lg"
              >
                →
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Track Interview Rounds
              </h3>

              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Keep track of where you are in the hiring
                process — from screening to technical
                interviews and final rounds.
              </p>

            </div>


            {/* Feature 3 */}

            <div
              className="p-6 rounded-2xl
                         border border-slate-200
                         bg-slate-50"
            >

              <div
                className="w-11 h-11 rounded-xl
                           bg-blue-100 text-blue-600
                           flex items-center justify-center
                           font-bold text-lg"
              >
                ✓
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Stay Organized
              </h3>

              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Keep all your applications, interview
                rounds, and important dates organized
                in one place.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="text-center">

          <p
            className="text-sm font-semibold text-blue-600
                       uppercase tracking-wider"
          >
            Simple workflow
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            How it works
          </h2>

        </div>


        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {/* Step 1 */}

          <div className="text-center">

            <div
              className="mx-auto w-12 h-12 rounded-full
                         bg-blue-600 text-white
                         flex items-center justify-center
                         font-bold"
            >
              1
            </div>

            <h3 className="mt-4 font-semibold text-lg">
              Add an application
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Enter the company, role, application date
              and other details.
            </p>

          </div>


          {/* Step 2 */}

          <div className="text-center">

            <div
              className="mx-auto w-12 h-12 rounded-full
                         bg-blue-600 text-white
                         flex items-center justify-center
                         font-bold"
            >
              2
            </div>

            <h3 className="mt-4 font-semibold text-lg">
              Update your progress
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Move your application through different
              hiring rounds.
            </p>

          </div>


          {/* Step 3 */}

          <div className="text-center">

            <div
              className="mx-auto w-12 h-12 rounded-full
                         bg-blue-600 text-white
                         flex items-center justify-center
                         font-bold"
            >
              3
            </div>

            <h3 className="mt-4 font-semibold text-lg">
              Land your next job
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Keep everything organized and focus on
              the opportunities that matter most.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA SECTION ================= */}

      <section className="bg-slate-900">

        <div
          className="max-w-4xl mx-auto px-6
                     py-16 text-center"
        >

          <h2 className="text-3xl font-bold text-white">
            Ready to take control of your job search?
          </h2>

          <p className="mt-4 text-slate-400">
            Start tracking your applications today.
          </p>

          <button
            onClick={() => navigate("/register")}
            className="mt-7 px-6 py-3 rounded-lg
                       bg-blue-600 hover:bg-blue-500
                       text-white font-semibold
                       transition cursor-pointer"
          >
            Create Free Account →
          </button>

        </div>

      </section>


      {/* <Footer /> */}

    </div>
  );
};

export default Home;