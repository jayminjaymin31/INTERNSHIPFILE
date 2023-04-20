import React from 'react'
import { Helmet } from 'react-helmet'

export const Badges = () => {
    return (
        <div>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"
                />

                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />

                <link
                    rel="stylesheet"
                    href="../assets/vendor/css/core.css"
                    class="template-customizer-core-css"
                />
                <link
                    rel="stylesheet"
                    href="../assets/vendor/css/theme-default.css"
                    class="template-customizer-theme-css"
                />
                <link rel="stylesheet" href="../assets/css/demo.css" />

                <link
                    rel="stylesheet"
                    href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
                />

                <link
                    rel="stylesheet"
                    href="../assets/vendor/libs/apex-charts/apex-charts.css"
                />

                <script src="../assets/vendor/js/helpers.js" />
            </Helmet>

            <div class="d-flex align-items-end row">
                <div class="col-sm-7">
                    <div class="card-body">
                        <h5 class="card-title text-primary">Congratulations John! 🎉</h5>
                        <p class="mb-4">
                            You have done <span class="fw-bold">72%</span> more sales today. Check your new badge in
                            your profile.
                        </p>

                        <a href="javascript:;" class="btn btn-sm btn-outline-primary">View Badges</a>
                    </div>
                </div>
                <div class="col-sm-5 text-center text-sm-left">
                    <div class="card-body pb-0 px-0 px-md-4">
                        <img src="../assets/img/illustrations/man-with-laptop-light.png" height="140" alt="View Badge User" data-app-dark-img="illustrations/man-with-laptop-dark.png" data-app-light-img="illustrations/man-with-laptop-light.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}
