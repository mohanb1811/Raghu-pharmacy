import "./Raghu.css";
import RaghuImage from "../../assets/Rahguimg.png";

export default function Raghu() {
    return (
        <section className="raghu-section">

            <div className="container">

                <div className="row align-items-center">

                    {/* Left Side */}

                    <div className="col-lg-6">

                        <p className="small-title">
                            MEET OUR PHARMACIST
                        </p>

                        <h1 className="raghu-title">
                            Hello,
                            <br />
                            I'm <span>R. Raghu</span> B.Pharm., M.Pharm.
                        </h1>

                        <p className="raghu-desc">
                            Dedicated Pharmacist with over <strong>5+ years of professional
                                experience</strong> in Pharmaceutical Manufacturing, Hospital
                            Pharmacy and Patient Care. Committed to providing genuine
                            medicines, veterinary healthcare products and trusted
                            pharmaceutical guidance.
                        </p>

                        {/* <div className="info-box">

                            <div className="info-item">
                                <span>👨‍⚕️ Name</span>
                                <p>R. Raghu</p>
                            </div>

                            <div className="info-item">
                                <span>🎓 Qualification</span>
                                <p>B.Pharm., M.Pharm.</p>
                            </div>

                            <div className="info-item">

                                <span>💼 Professional Experience</span>

                                <p className="experience-highlight">
                                    ⭐ Overall Experience : <strong>5+ Years</strong>
                                </p>

                                <ul>

                                    <li>
                                        <strong>Arutura Pharmaceutical Laboratories Pvt. Ltd.</strong>
                                        <br />
                                        Production Pharmacist — <b>1 Year</b>
                                    </li>

                                    <li>
                                        <strong>Sanjeevani Hospital, Bengaluru</strong>
                                        <br />
                                        Hospital Pharmacist — <b>1 Year</b>
                                    </li>

                                    <li>
                                        <strong>Ankura Hospital (Women & Children), Tirupati</strong>
                                        <br />
                                        Hospital Pharmacist — <b>2 Years</b>
                                    </li>

                                    <li>
                                        <strong>Retail & Community Pharmacy</strong>
                                        <br />
                                        Customer Care & Medicine Consultation — <b>1+ Year</b>
                                    </li>

                                </ul>

                            </div>

                        </div> */}

                    </div>

                    {/* Right Side */}

                    <div className="col-lg-6 text-center">

                        <div className="profile-bg">

                            <img
                                src={RaghuImage}
                                alt="R. Raghu"
                                className="profile-img"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}