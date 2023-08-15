import React from "react";

export default function Modal({ showModal, setShowModal, onSubmit, loading }) {
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative my-4 mx-auto max-w-6xl">

              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Hapus Shipping Comps?
                  </p>
                </div>

                <div className="flex items-center justify-end px-6 py-3 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                    disabled={loading}
                  >
                    Tutup
                  </button>
                  <button
                    className="bg-blue-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-10 w-52 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:cursor-not-allowed"
                    type="button"
                    onClick={() => onSubmit()}
                    disabled={loading}
                  >
                    {loading ? 'Loading...' : 'Ya'}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}