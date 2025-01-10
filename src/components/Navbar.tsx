import '../App.css';

export default function Navbar() {
  return(
    <>
      <div className="m-auto border-solid border-white border-2 rounded-xl p-4 flex flex-row w-fit">
        <div className="text-center justify-center items-center flex flex-auto space-x-8">
          <a href="/"><img src="" alt="" className="w-12 h-auto"/></a>
          <a href="/produk" className="p-2 hover:text-slate-300">List Produk</a>
          <a href="/faq" className="p-2 hover:text-slate-300">FAQs</a>
          <a href="/about" className="p-2 hover:text-slate-300">Tentang Kami</a>
          <a href="/register" className="p-2 hover:text-slate-300">Register</a>
        </div>
      </div>
    </>
  )
}