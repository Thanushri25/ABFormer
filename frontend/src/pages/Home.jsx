import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F8FAFC]">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 bg-[#0B0B0B] border-b border-[rgba(255,255,255,0.08)]">

        <h1 className="text-3xl font-bold tracking-wide text-[#C08457]">
          AbFormer
        </h1>

        <div className="flex gap-8 text-[#A1A1AA]">

          <Link
            to="/"
            className="hover:text-[#E7C9A9] transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-[#E7C9A9] transition"
          >
            About Us
          </Link>

          <Link
            to="/prediction"
            className="hover:text-[#E7C9A9] transition"
          >
            Prediction Analysis
          </Link>

        </div>

      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">

        <div className="mb-6 px-5 py-2 rounded-full border border-[#C08457]/20 bg-[#C08457]/10 text-[#E7C9A9] text-sm backdrop-blur-[14px]">
          AI-Powered Antibody Drug Conjugate Prediction
        </div>

        <h1 className="text-6xl lg:text-7xl font-bold leading-tight max-w-5xl mb-8">

          Advanced ADC Activity

          <span className="text-[#C08457]">
            {" "}Prediction{" "}
          </span>

          Platform

        </h1>

        <p className="text-[#A1A1AA] text-xl leading-relaxed max-w-3xl mb-12">

          AbFormer integrates transformer-based sequence modeling,
          structural intelligence, molecular representation learning,
          and interaction analysis for accurate ADC activity prediction
          and therapeutic evaluation.

        </p>

        <div className="flex flex-wrap justify-center gap-5">

          <Link to="/about">

            <button className="px-8 py-4 rounded-2xl font-semibold text-black bg-gradient-to-r from-[#C08457] to-[#E7C9A9] hover:shadow-[0_0_20px_rgba(192,132,87,0.35)] transition">

              About Us

            </button>

          </Link>

          <Link to="/prediction">

            <button className="px-8 py-4 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] backdrop-blur-[14px] hover:border-[#C08457]/40 hover:shadow-[0_0_20px_rgba(192,132,87,0.35)] transition font-semibold">

              Prediction Analysis

            </button>

          </Link>

        </div>

      </section>

      {/* Pipeline */}
      <section className="px-10 pb-24">

        <h2 className="text-4xl font-bold text-center mb-16">
          Model Pipeline
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            ["ESM-2", "/esm2", "Sequence representation learning for antibody and antigen understanding."],
            ["IgFold", "/igfold", "Structural folding analysis of antibody proteins."],
            ["AntiBinder", "/antibinder", "Antibody-antigen interaction and binding analysis."],
            ["FG-BERT", "/fgbert", "Molecular payload and linker feature extraction."]
          ].map(([title, path, desc]) => (

            <Link to={path} key={title}>

              <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] hover:border-[#C08457]/40 rounded-3xl p-8 backdrop-blur-[14px] transition hover:-translate-y-2 cursor-pointer hover:shadow-[0_0_20px_rgba(192,132,87,0.35)]">

                <h3 className="text-2xl font-bold text-[#C08457] mb-4">
                  {title}
                </h3>

                <p className="text-[#A1A1AA] leading-relaxed">
                  {desc}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </div>
  )
}

export default Home