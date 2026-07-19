import { Link } from "react-router-dom"

function IgFold() {

  return (

    <div className="min-h-screen bg-[#050505] text-[#F8FAFC]">

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

      <section className="text-center py-20 px-6">

        <div className="inline-block px-5 py-2 rounded-full border border-[#C08457]/20 bg-[#C08457]/10 text-[#E7C9A9] text-sm backdrop-blur-[14px] mb-6">
          Antibody Structure Prediction
        </div>

        <h1 className="text-7xl font-bold mb-8">
          IgFold
        </h1>

        <p className="text-[#A1A1AA] text-xl leading-relaxed max-w-4xl mx-auto">
          Deep learning-based antibody structure prediction
          for biologically realistic interaction modeling.
        </p>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="bg-[rgba(192,132,87,0.08)] border border-[#C08457]/20 rounded-[30px] p-12 backdrop-blur-[14px] hover:border-[#C08457]/40 hover:shadow-[0_0_20px_rgba(192,132,87,0.35)] transition">

          <h2 className="text-5xl font-bold text-[#C08457] mb-10">
            What is IgFold?
          </h2>

          <div className="space-y-8 text-[#A1A1AA] text-xl leading-relaxed">

            <p>
              IgFold is a deep learning-based antibody structure prediction
              model that generates three-dimensional structural
              representations directly from amino acid sequences.
            </p>

            <p>
              Since antibody-antigen binding depends heavily on spatial
              compatibility, sequence information alone is insufficient
              for accurate interaction modeling.
            </p>

            <p>
              IgFold predicts folding patterns and geometric arrangements
              of antibody structures, providing structural insights such as
              binding surfaces and spatial orientation.
            </p>

            <p>
              In ABFormer, IgFold extracts structural features of antibody
              sequences before interaction modeling.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-[rgba(192,132,87,0.08)] border border-[#C08457]/20 rounded-3xl p-8 backdrop-blur-[14px]">

            <h3 className="text-3xl font-bold text-[#E7C9A9] mb-5">
              Input
            </h3>

            <p className="text-[#A1A1AA] text-lg">
              Antibody amino acid sequences.
            </p>

          </div>

          <div className="bg-[rgba(192,132,87,0.08)] border border-[#C08457]/20 rounded-3xl p-8 backdrop-blur-[14px]">

            <h3 className="text-3xl font-bold text-[#E7C9A9] mb-5">
              Output
            </h3>

            <p className="text-[#A1A1AA] text-lg">
              3D structural antibody representations.
            </p>

          </div>

          <div className="bg-[rgba(192,132,87,0.08)] border border-[#C08457]/20 rounded-3xl p-8 backdrop-blur-[14px]">

            <h3 className="text-3xl font-bold text-[#E7C9A9] mb-5">
              Role in ABFormer
            </h3>

            <p className="text-[#A1A1AA] text-lg">
              Structural feature extraction for interaction modeling.
            </p>

          </div>

        </div>

      </section>

    </div>

  )
}

export default IgFold