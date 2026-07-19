import { Link } from "react-router-dom"

function ESM2() {

  return (

    <div className="min-h-screen bg-[#050505] text-[#F8FAFC]">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 bg-[#0B0B0B] border-b border-[rgba(255,255,255,0.08)]">

        <h1 className="text-3xl font-bold text-[#C08457]">
          AbFormer
        </h1>

        <div className="flex gap-8 text-[#A1A1AA]">

          <Link to="/" className="hover:text-[#E7C9A9] transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-[#E7C9A9] transition">
            About
          </Link>

          <Link to="/prediction" className="hover:text-[#E7C9A9] transition">
            Prediction
          </Link>

        </div>

      </nav>

      {/* Hero */}
      <section className="text-center py-20 px-6">

        <div className="inline-block px-5 py-2 rounded-full border border-[#C08457]/20 bg-[#C08457]/10 text-[#E7C9A9] text-sm backdrop-blur-[14px] mb-6">
          Protein Language Modeling
        </div>

        <h1 className="text-7xl font-bold mb-8">
          ESM-2
        </h1>

        <p className="text-[#A1A1AA] text-xl leading-relaxed max-w-4xl mx-auto">
          Evolutionary Scale Modeling-2 for contextual protein
          sequence understanding and biological representation learning.
        </p>

      </section>

      {/* Main */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        {/* Main Description */}
        <div className="bg-[rgba(192,132,87,0.08)] border border-[#C08457]/20 rounded-[30px] p-12 backdrop-blur-[14px] hover:border-[#C08457]/40 hover:shadow-[0_0_20px_rgba(192,132,87,0.35)] transition">

          <h2 className="text-5xl font-bold text-[#C08457] mb-10">
            What is ESM-2?
          </h2>

          <div className="space-y-8 text-[#A1A1AA] text-xl leading-relaxed">

            <p>
              ESM-2 (Evolutionary Scale Modeling-2) is a transformer-based
              protein language model designed to learn biological patterns
              from large-scale protein sequence data.
            </p>

            <p>
              It processes amino acid sequences using self-attention
              mechanisms and converts them into 1280-dimensional embeddings
              that capture structural, functional, and evolutionary information.
            </p>

            <p>
              Unlike traditional sequence encoding methods, ESM-2 understands
              contextual relationships between amino acids, enabling deeper
              biological interpretation.
            </p>

            <p>
              In the ABFormer framework, ESM-2 is used to process antibody
              light-chain sequences and antigen protein sequences.
            </p>

            <p>
              The generated embeddings provide biologically meaningful
              representations that improve ADC activity prediction accuracy.
            </p>

          </div>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {/* Input */}
          <div className="bg-[rgba(192,132,87,0.08)] border border-[#C08457]/20 rounded-3xl p-8 backdrop-blur-[14px] hover:border-[#C08457]/40 hover:shadow-[0_0_20px_rgba(192,132,87,0.35)] transition">

            <h3 className="text-3xl font-bold text-[#E7C9A9] mb-5">
              Input
            </h3>

            <p className="text-[#A1A1AA] text-lg leading-relaxed">
              Antibody and antigen amino acid sequences.
            </p>

          </div>

          {/* Output */}
          <div className="bg-[rgba(192,132,87,0.08)] border border-[#C08457]/20 rounded-3xl p-8 backdrop-blur-[14px] hover:border-[#C08457]/40 hover:shadow-[0_0_20px_rgba(192,132,87,0.35)] transition">

            <h3 className="text-3xl font-bold text-[#E7C9A9] mb-5">
              Output
            </h3>

            <p className="text-[#A1A1AA] text-lg leading-relaxed">
              1280-dimensional contextual protein embeddings.
            </p>

          </div>

          {/* Role */}
          <div className="bg-[rgba(192,132,87,0.08)] border border-[#C08457]/20 rounded-3xl p-8 backdrop-blur-[14px] hover:border-[#C08457]/40 hover:shadow-[0_0_20px_rgba(192,132,87,0.35)] transition">

            <h3 className="text-3xl font-bold text-[#E7C9A9] mb-5">
              Role in ABFormer
            </h3>

            <p className="text-[#A1A1AA] text-lg leading-relaxed">
              Biological sequence representation learning for ADC prediction.
            </p>

          </div>

        </div>

      </section>

    </div>

  )
}

export default ESM2