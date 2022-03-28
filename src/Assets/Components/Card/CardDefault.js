import React from 'react'

export const CardDefault = () => {
  return (
    <div>
    <div className='col'>
    <div className="card h-100">
    <img src="/img/mobil_card.png" className="card-img-top p-5" alt="..." />
    <div className="card-body">
      <p className="card-text fs-5">Nama/Tipe Mobil</p>
      <h3><strong>Rp 430.000 / hari</strong></h3>
      <i className="bi bi-key me-3 my-2"></i>
      <span>Start Rent - Finish Rent</span>
      <br />
      <i className="bi bi-clock me-3"></i>
      <span>Updated at 4 Apr 2022, 09.00</span>
      <br />

      <div className="row">
        <div className="col-6">
          <button
            type="button"
            class="btn border border-danger my-4"
            style="width: 8rem"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <span>
              <i className="bi bi-trash me-3 text-danger"></i>
              <span className="text-danger">Delete</span>
            </span>
          </button>


          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <img src="../../IMG/Beep Beep - Medium Vehicle.png" class="mx-auto d-block"/>
                  <h5 className="text-center my-2">
                    <strong>Menghapus Data Mobil</strong>
                  </h5>
                  <p className="text-dark text-center">
                    Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin
                    ingin menghapus?
                  </p>
                </div>

                <div
                  className="container mx-auto d-flex justify-content-center mb-4">
                  <button type="button" class="btn btn-primary">Ya</button>
                  <button
                    type="button"
                    className="btn btn-light border-primary text-primary ms-3">
                    Tidak
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <button
            type="button"
            className="btn btn-success my-4"
            style="width: 8rem"
          >
            <span>
              <i className="bi bi-pencil-square me-3 text-light"></i>
              <span className="text-light">Edit</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
