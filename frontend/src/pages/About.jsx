import { Link } from "react-router-dom"
//import paper from "../assets/abformer-paper.pdf";
import architecture from "../assets/architecture.png"
import performance from "../assets/performance.png"
import results from "../assets/results.png"
import esm2 from "../assets/esm2.png"
import fgbert from "../assets/fgbert.png"
import antibinder from "../assets/antibinder.png"
import workflow from "../assets/workflow.png"


function About() {
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
            to="/prediction"
            className="hover:text-[#E7C9A9] transition"
          >
            Prediction Analysis
          </Link>

        </div>

      </nav>

      {/* Hero */}
      <section className="text-center px-6 py-24">

        <div className="inline-block px-5 py-2 rounded-full border border-[#C08457]/20 bg-[#C08457]/10 text-[#E7C9A9] text-sm backdrop-blur-[14px] mb-6">
          Multimodal ADC Prediction Framework
        </div>

        <h1 className="text-6xl lg:text-7xl font-bold mb-8">
          About
          <span className="text-[#C08457]">
            {" "}AbFormer
          </span>
        </h1>

        <p className="text-[#A1A1AA] text-xl leading-relaxed max-w-4xl mx-auto">
          AbFormer integrates transformer-based biological sequence learning,
          structural antibody modeling, molecular representation learning,
          and contextual interaction analysis for accurate ADC activity prediction.
        </p>

      </section>

      {/* Architecture */}
      <section className="px-10 pb-24 max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-[#C08457] mb-12 text-center">
          ABFormer Architecture
        </h2>

        <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-3xl p-8 backdrop-blur-[14px] mb-16">

          <img
            src={architecture}
            alt="ABFormer Architecture"
            className="w-full rounded-2xl"
          />

          <p className="text-[#A1A1AA] text-lg leading-relaxed mt-8">
            ABFormer combines ESM-2, IgFold, AntiBinder, and FG-BERT
            into a unified multimodal transformer architecture for
            biologically informed ADC activity prediction.
          </p>

        </div>

        {/* Performance */}
        <h2 className="text-5xl font-bold text-[#C08457] mb-12 text-center">
          Model Performance
        </h2>

        <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-3xl p-8 backdrop-blur-[14px] mb-16">

          <img
            src={performance}
            alt="Performance Comparison"
            className="w-full rounded-2xl"
          />

        </div>

        {/* Results */}
        <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-3xl p-8 backdrop-blur-[14px] mb-16">

          <img
            src={results}
            alt="Results Table"
            className="w-full rounded-2xl"
          />

        </div>
        {/* Research Paper */}

<section className="mt-24">

  <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-3xl p-10 backdrop-blur-[14px]">

    <h2 className="text-5xl font-bold mb-6">
      Research
      <span className="text-[#C08457]">
        {" "}Paper
      </span>
    </h2>

    <p className="text-[#A1A1AA] text-lg leading-relaxed max-w-4xl mb-10">
      ABFormer is a transformer-based multimodal framework
      for Antibody Drug Conjugate activity prediction using
      contextual antibody-antigen interaction learning,
      structural modeling, and molecular representation learning.
    </p>

    <div className="flex gap-6 flex-wrap">
    
      <a
        href="/abformer-paper.pdf"
        target="_blank"
        rel="noreferrer"
        className="px-8 py-4 rounded-2xl font-semibold text-black transition"
        style={{
          background:
            "linear-gradient(135deg, #C08457, #E7C9A9)",
          boxShadow:
            "0 0 20px rgba(192,132,87,0.35)",
        }}
      >
      
        View Research Paper
      </a>

      <a
        href="/abformer-paper.pdf"
        download
        className="px-8 py-4 rounded-2xl border border-[#C08457] text-[#E7C9A9] hover:bg-[#C08457] hover:text-black transition"
      >
        Download PDF
      </a>

    </div>
  </div>
</section>


        {/* Model Pipelines */}
        <h2 className="text-5xl font-bold text-[#C08457] mb-12 text-center">
          Model Pipelines
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* ESM2 */}
          <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-3xl p-8 backdrop-blur-[14px] hover:border-[#C08457]/40 hover:shadow-[0_0_20px_rgba(192,132,87,0.35)] transition">

            <h3 className="text-4xl font-bold text-[#E7C9A9] mb-6">
              ESM-2 Architecture
            </h3>

            <img
              src={esm2}
              alt="ESM2"
              className="w-full rounded-2xl mb-6"
            />

            <p className="text-[#A1A1AA] text-lg leading-relaxed">
              ESM-2 generates contextual protein embeddings from antibody
              and antigen sequences using transformer encoder layers
              and self-attention mechanisms.
            </p>

          </div>

          {/* FG-BERT */}
          <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-3xl p-8 backdrop-blur-[14px] hover:border-[#C08457]/40 hover:shadow-[0_0_20px_rgba(192,132,87,0.35)] transition">

            <h3 className="text-4xl font-bold text-[#E7C9A9] mb-6">
              FG-BERT Architecture
            </h3>

            <img
              src={fgbert}
              alt="FG-BERT"
              className="w-full rounded-2xl mb-6"
            />

            <p className="text-[#A1A1AA] text-lg leading-relaxed">
              FG-BERT processes linker and payload SMILES sequences
              using transformer-based molecular encoding layers.
            </p>

          </div>

          {/* AntiBinder */}
          <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-3xl p-8 backdrop-blur-[14px] hover:border-[#C08457]/40 hover:shadow-[0_0_20px_rgba(192,132,87,0.35)] transition">

            <h3 className="text-4xl font-bold text-[#E7C9A9] mb-6">
              AntiBinder Architecture
            </h3>

            <img
              src={antibinder}
              alt="AntiBinder"
              className="w-full rounded-2xl mb-6"
            />

            <p className="text-[#A1A1AA] text-lg leading-relaxed">
              AntiBinder models contextual antibody-antigen interactions
              using bidirectional cross-attention fusion mechanisms.
            </p>

          </div>

          {/* Workflow */}
          <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-3xl p-8 backdrop-blur-[14px] hover:border-[#C08457]/40 hover:shadow-[0_0_20px_rgba(192,132,87,0.35)] transition">

            <h3 className="text-4xl font-bold text-[#E7C9A9] mb-6">
              Complete Workflow
            </h3>

            <img
              src={workflow}
              alt="Workflow"
              className="w-full rounded-2xl mb-6"
            />

            <p className="text-[#A1A1AA] text-lg leading-relaxed">
              Complete ABFormer workflow including sequence processing,
              multimodal embedding generation, interaction modeling,
              and ADC activity prediction.
            </p>

          </div>

        </div>

      </section>

    </div>
  )
}

export default About