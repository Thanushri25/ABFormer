import { Link } from "react-router-dom"

function AntiBinder() {

  return (

    <div className="min-h-screen bg-[#050505] text-[#F8FAFC]">

      <nav className="flex justify-between items-center px-10 py-6 bg-[#0B0B0B] border-b border-[rgba(255,255,255,0.08)]">

        <h1 className="text-3xl font-bold text-[#C08457]">
          AbFormer
        </h1>

        <div className="flex gap-8 text-[#A1A1AA]">

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/prediction">Prediction</Link>

        </div>

      </nav>

      <section className="text-center py-20 px-6">

        <div className="inline-block px-5 py-2 rounded-full border border-[#C08457]/20 bg-[#C08457]/10 text-[#E7C9A9] text-sm backdrop-blur-[14px] mb-6">
          Interaction Modeling Framework
        </div>

        <h1 className="text-7xl font-bold mb-8">
          AntiBinder
        </h1>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="bg-[rgba(192,132,87,0.08)] border border-[#C08457]/20 rounded-[30px] p-12 backdrop-blur-[14px]">

          <h2 className="text-5xl font-bold text-[#C08457] mb-10">
            What is AntiBinder?
          </h2>

          <div className="space-y-8 text-[#A1A1AA] text-xl leading-relaxed">

            <p>
              AntiBinder is a deep learning interaction framework
              that models contextual relationships between antibodies
              and antigens using bidirectional cross-attention.
            </p>

            <p>
              It combines sequence embeddings from ESM-2 and structural
              information from IgFold to generate contextualized
              antibody-antigen representations.
            </p>

            <p>
              AntiBinder serves as the core interaction modeling
              component of ABFormer.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-[rgba(192,132,87,0.08)] border border-[#C08457]/20 rounded-3xl p-8 backdrop-blur-[14px]">

            <h3 className="text-3xl font-bold text-[#E7C9A9] mb-5">
              Input
            </h3>

            <p className="text-[#A1A1AA] text-lg">
              ESM-2 embeddings and IgFold structural features.
            </p>

          </div>

          <div className="bg-[rgba(192,132,87,0.08)] border border-[#C08457]/20 rounded-3xl p-8 backdrop-blur-[14px]">

            <h3 className="text-3xl font-bold text-[#E7C9A9] mb-5">
              Output
            </h3>

            <p className="text-[#A1A1AA] text-lg">
              Contextual antibody-antigen embeddings.
            </p>

          </div>

          <div className="bg-[rgba(192,132,87,0.08)] border border-[#C08457]/20 rounded-3xl p-8 backdrop-blur-[14px]">

            <h3 className="text-3xl font-bold text-[#E7C9A9] mb-5">
              Role in ABFormer
            </h3>

            <p className="text-[#A1A1AA] text-lg">
              Interaction learning and biological dependency modeling.
            </p>

          </div>

        </div>

      </section>

    </div>

  )
}

export default AntiBinder