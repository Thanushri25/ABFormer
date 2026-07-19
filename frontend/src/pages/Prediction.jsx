import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Prediction() {

  const [result, setResult] = useState(null)
  const [heatmapUrl, setHeatmapUrl] = useState("")
  const [history, setHistory] = useState([])

  const [heavyChain, setHeavyChain] = useState("")
  const [lightChain, setLightChain] = useState("")
  const [antigen, setAntigen] = useState("")
  const [payload, setPayload] = useState("")
  const [linker, setLinker] = useState("")
  const [dar, setDar] = useState("")

  useEffect(() => {

    fetch("http://127.0.0.1:8000/history")

      .then((response) => response.json())

      .then((data) => {
        setHistory(data)
      })

      .catch((error) => {
        console.error("History Fetch Error:", error)
      })

  }, [])

  const handlePrediction = async () => {
    console.log("Button clicked")
    try {

      const response = await fetch("http://127.0.0.1:8000/predict", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          heavy_chain: heavyChain,
          light_chain: lightChain,
          antigen,
          payload,
          linker,
          dar: Number(dar),
        }),

      })

      const data = await response.json()

      setResult(data)
      
      const heatmapResponse = await fetch(
        "http://127.0.0.1:8000/heatmap"
      )

      const heatmapData = await heatmapResponse.json()

      setHeatmapUrl(heatmapData.heatmap_url)

    } catch (error) {

      console.error("Prediction Error:", error)

    }

  }

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

        </div>

      </nav>

      {/* Hero */}
      <section className="text-center py-20 px-6">

        <div className="inline-block px-5 py-2 rounded-full border border-[#C08457]/20 bg-[#C08457]/10 text-[#E7C9A9] text-sm backdrop-blur-[14px] mb-6">
          AI-driven ADC Activity Prediction
        </div>

        <h1 className="text-6xl font-bold mb-8">
          Prediction
          <span className="text-[#C08457]">
            {" "}Analysis
          </span>
        </h1>

        <p className="text-[#A1A1AA] text-xl leading-relaxed max-w-4xl mx-auto">
          Analyze antibody-drug conjugate activity using
          multimodal transformer-based biological intelligence.
        </p>

      </section>

      {/* Form */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-[30px] p-10 backdrop-blur-[14px]">

          <div className="grid md:grid-cols-2 gap-8">

            {/* Heavy Chain */}
            <div>

              <label className="block mb-3 text-[#E7C9A9] text-lg">
                Heavy Chain Sequence
              </label>

              <textarea
                rows="6"
                value={heavyChain}
                onChange={(e) => setHeavyChain(e.target.value)}
                placeholder="Enter heavy chain amino acid sequence..."
                className="w-full bg-black/40 border border-[rgba(255,255,255,0.08)] rounded-2xl p-4 text-white outline-none focus:border-[#C08457]"
              />

            </div>

            {/* Light Chain */}
            <div>

              <label className="block mb-3 text-[#E7C9A9] text-lg">
                Light Chain Sequence
              </label>

              <textarea
                rows="6"
                value={lightChain}
                onChange={(e) => setLightChain(e.target.value)}
                placeholder="Enter light chain amino acid sequence..."
                className="w-full bg-black/40 border border-[rgba(255,255,255,0.08)] rounded-2xl p-4 text-white outline-none focus:border-[#C08457]"
              />

            </div>

            {/* Antigen */}
            <div>

              <label className="block mb-3 text-[#E7C9A9] text-lg">
                Antigen Sequence
              </label>

              <textarea
                rows="6"
                value={antigen}
                onChange={(e) => setAntigen(e.target.value)}
                placeholder="Enter antigen protein sequence..."
                className="w-full bg-black/40 border border-[rgba(255,255,255,0.08)] rounded-2xl p-4 text-white outline-none focus:border-[#C08457]"
              />

            </div>

            {/* Payload */}
            <div>

              <label className="block mb-3 text-[#E7C9A9] text-lg">
                Payload SMILES
              </label>

              <input
                type="text"
                value={payload}
                onChange={(e) => setPayload(e.target.value)}
                placeholder="Enter payload smiles..."
                className="w-full bg-black/40 border border-[rgba(255,255,255,0.08)] rounded-2xl p-4 text-white outline-none focus:border-[#C08457]"
              />

            </div>

            {/* Linker */}
            <div>

              <label className="block mb-3 text-[#E7C9A9] text-lg">
                Linker SMILES
              </label>

              <input
                type="text"
                value={linker}
                onChange={(e) => setLinker(e.target.value)}
                placeholder="Enter linker smiles..."
                className="w-full bg-black/40 border border-[rgba(255,255,255,0.08)] rounded-2xl p-4 text-white outline-none focus:border-[#C08457]"
              />

            </div>

            {/* DAR */}
            <div>

              <label className="block mb-3 text-[#E7C9A9] text-lg">
                DAR Value
              </label>

              <input
                type="number"
                value={dar}
                onChange={(e) => setDar(e.target.value)}
                placeholder="Enter DAR value..."
                className="w-full bg-black/40 border border-[rgba(255,255,255,0.08)] rounded-2xl p-4 text-white outline-none focus:border-[#C08457]"
              />

            </div>

          </div>

          {/* Predict Button */}
          <div className="mt-10">

            <button
              onClick={handlePrediction}
              className="px-10 py-4 rounded-2xl font-semibold text-black transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, #C08457, #E7C9A9)",
                boxShadow:
                  "0 0 20px rgba(192,132,87,0.35)",
              }}
            >
              Run Prediction
            </button>

          </div>

        </div>

        {/* Results */}
        {result && (

          <div className="mt-16">

            <h2 className="text-5xl font-bold mb-10">
              Prediction
              <span className="text-[#C08457]">
                {" "}Results
              </span>
            </h2>

            {/* Result Cards */}
            <div className="grid md:grid-cols-4 gap-6">

              <div className="bg-[rgba(192,132,87,0.08)] border border-[#C08457]/20 rounded-3xl p-8 backdrop-blur-[14px]">

                <h3 className="text-[#E7C9A9] text-lg mb-3">
                  Activity
                </h3>

                <p className="text-4xl font-bold">
                  {result.activity}
                </p>

              </div>

              <div className="bg-[rgba(192,132,87,0.08)] border border-[#C08457]/20 rounded-3xl p-8 backdrop-blur-[14px]">

                <h3 className="text-[#E7C9A9] text-lg mb-3">
                  Activity Score
                </h3>

                <p className="text-4xl font-bold">
                  {result.score}
                </p>

              </div>

              <div className="bg-[rgba(192,132,87,0.08)] border border-[#C08457]/20 rounded-3xl p-8 backdrop-blur-[14px]">

                <h3 className="text-[#E7C9A9] text-lg mb-3">
                  Toxicity Risk
                </h3>

                <p className="text-4xl font-bold">
                  {result.toxicity}
                </p>

              </div>

              <div className="bg-[rgba(192,132,87,0.08)] border border-[#C08457]/20 rounded-3xl p-8 backdrop-blur-[14px]">

                <h3 className="text-[#E7C9A9] text-lg mb-3">
                  Binding Confidence
                </h3>

                <p className="text-4xl font-bold">
                  {result.binding}
                </p>

              </div>

            </div>

            {/* Prediction History */}
            <div className="mt-14 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-[30px] p-8 backdrop-blur-[14px] overflow-x-auto">

              <div className="flex justify-between items-center mb-8">

                <h3 className="text-3xl font-bold">
                  Prediction
                  <span className="text-[#C08457]">
                    {" "}History
                  </span>
                </h3>

                <div className="px-4 py-2 rounded-xl bg-[#C08457]/10 text-[#E7C9A9] text-sm border border-[#C08457]/20">
                  {history.length} Rows
                </div>

              </div>

              <table className="w-full min-w-[700px]">

                <thead>

                  <tr className="text-left border-b border-[rgba(255,255,255,0.08)] text-[#A1A1AA]">

                    <th className="pb-4">ID</th>
                    <th className="pb-4">Antibody</th>
                    <th className="pb-4">Antigen</th>
                    <th className="pb-4">Prediction Score</th>
                    <th className="pb-4">Predicted Label</th>

                  </tr>

                </thead>

                <tbody>

                  {history.map((item, index) => (

                    <tr
                      key={index}
                      className="border-b border-[rgba(255,255,255,0.05)]"
                    >

                      <td className="py-6 text-white">
                        {index + 1}
                      </td>

                      <td className="py-6 text-[#A1A1AA]">
                        {item.antibody}
                      </td>

                      <td className="py-6 text-[#A1A1AA]">
                        {item.antigen}
                      </td>

                      <td className="py-6">

                        <div className="flex items-center gap-4">

                          <span className="text-white">
                            {item.score}
                          </span>

                          <div className="w-32 h-2 rounded-full bg-white/10 overflow-hidden">

                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${item.score * 100}%`,
                                background:
                                  "linear-gradient(135deg, #C08457, #E7C9A9)",
                              }}
                            />

                          </div>

                        </div>

                      </td>

                      <td className="py-6">

                        <span
                          className={`px-4 py-2 rounded-full text-sm font-semibold ${item.label === "ACTIVE"
                              ? "bg-green-500/10 text-green-400 border border-green-500/20"
                              : "bg-red-500/10 text-red-400 border border-red-500/20"
                            }`}
                        >
                          {item.label}
                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

            {/* Heatmap */}
            <div className="mt-12 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-[30px] p-10 backdrop-blur-[14px]">

              <h3 className="text-4xl font-bold mb-8">
                Interaction
                <span className="text-[#C08457]">
                  {" "}Heatmap
                </span>
              </h3>

                <div className="h-[650px] rounded-3xl bg-gradient-to-br from-[#C08457]/30 via-black to-[#E7C9A9]/20 flex items-center justify-center text-[#A1A1AA] text-xl overflow-hidden">
                {heatmapUrl ? (

                  <img
                    src={heatmapUrl}
                    alt="Attention Heatmap"
                    className="w-full h-[500px] object-contain rounded-3xl"
                  />

                ) : (

                  <div className="text-[#A1A1AA] text-xl">
                    No Heatmap Generated
                  </div>

                )}
              </div>

            </div>

          </div>

        )}

      </section>

    </div>
  )
}

export default Prediction