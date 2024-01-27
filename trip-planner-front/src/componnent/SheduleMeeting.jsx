function SheduleMeeting() {
    return (
        <div>
            <div class="container">
                <div class="row g-5">
                    <div class="col-md-7 col-lg-8">
                        <h4 class="mb-3">Reserve Meeting With Travel Agent</h4>
                        <hr class="my-4" />
                        <h6 class="mb-3">Traveler Details</h6>
                        <form class="needs-validation" novalidate>
                            <div class="row g-3">
                                <div class="col-sm-6">
                                    <label for="firstName" class="form-label">First name</label>
                                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                                    <div class="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <label for="lastName" class="form-label">Last name</label>
                                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                                    <div class="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div class="col-12">
                                    <label for="contact" class="form-label">Contact Number <span class="text-muted">(Mandatory)</span></label>
                                    <input type="" class="form-control" id="contact" placeholder="+94718888888" />
                                    <div class="invalid-feedback">
                                        Please enter a valid contact Number.
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
                                    <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                                    <div class="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>
                            </div>
                            <hr class="my-4" />
                            <h6 class="mb-3">Shedule Details</h6>
                            <div class="row g-3">
                                <div class="col-sm-4">
                                    <div class="dropdown">
                                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Select Date
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="dropdown">
                                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Select Time
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="dropdown">
                                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Select Medium
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <button class="w-100 btn btn-primary btn-lg" type="submit">Reserve</button>

                                <div class="card text-center">
                                    <div class="card-header">
                                        Reservation Token 
                                    </div>
                                    <div class="card-body">
                                        <h1 class="card-title">405</h1>
                                        <p class="card-text">Please ensure to retain your TOKEN number when reaching out to us.</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <h4 class="mb-3">My Reservations </h4>
                        <hr class="my-4" />
                        <h6 className="mb-3">Name : </h6>
                        <h6 class="mb-3">email : </h6>
                        <h6 class="mb-3">Contact No. : </h6>
                        <h6 class="mb-3">Meeting Date : </h6>
                        <h6 class="mb-3">Meeting Time : </h6>
                        <h6 class="mb-3">Meeting Medium : </h6>
                        <h6 class="mb-3">Token No. : </h6>
                        <hr class="my-4" />
                        <h6 class="mb-3">Agent contact Details : </h6>
                        <hr class="my-4" />
                        <h6 class="mb-3">Guidelines : </h6>
                        <p>Utilize the contact medium provided for scheduling meetings and kindly remember to reference your token number when meeting with our agent</p>
                        <hr class="my-4" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SheduleMeeting