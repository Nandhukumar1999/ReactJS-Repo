import React from "react";
import './technologycard.css'
import 'bootstrap/dist/css/bootstrap.css'


export function Technologycard(){
    return(
        
            <>
              <div className="p-5 info">
                <h1 className="text-center">Learn 4.0 Technology</h1>
                <p className="text-center">
                  Technology, the application of scientific knowledge to the practical
                  aims of human life or, as it is sometimes phrased, to the change and
                  manipulation of the human environment.
                </p>
                <div>
                  <div className="d-flex row p-5 justify-content-center">
                    <div className="d-flex row col-lg-5 super p-5 m-2 ">
                      <h3>Data Scientist</h3>
                      <p>
                        Data scientists are a new breed of analytical data expert who
                        have the technical skills to solve complex problems – and the
                        curiosity to explore what problems need to be solved. They're
                        part mathematician, part computer scientist and part
                        trend-spotter.
                      </p>
                      <img
                        src="https://bernardmarr.com/wp-content/uploads/2022/11/The-Top-5-Data-Science-And-Analytics-Trends-In-2023.jpg"
                        alt="loading"
                      />
                    </div>
                    <div className="d-flex row col-lg-5 hello p-5 m-2">
                      <h3>IOT Developer</h3>
                      <p>
                        The role of an IoT Developer/Engineer is a broad umbrella that
                        brings to play multiple disciplines and skillsets. IoT
                        Developers are professionals who can develop, manage, and
                        monitor IoT devices and systems by combining three core
                        components – data, technology, and research.
                      </p>
                      <img src="https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg"
                        alt="loading"
                      />
                    </div>
                  </div>
                  <div className="d-flex row p-5 justify-content-center">
                    <div className="d-flex row col-lg-5 p-5 m-2 hii ">
                      <h3>VR Developer</h3>
                      <p>
                        Virtual reality and augmented reality developers are the
                        creative minds behind extended reality programs. The duties
                        within the first few years in a position in either field
                        typically include the designing, testing and developing of
                        virtual or augmented reality software.
                      </p>
                      <img
                        src="https://www.saratechnologies.com/images/virtual-reality-1.png"
                        alt="loading"
                      />
                    </div>
                    <div className="dd-flex row col-lg-5 p-5 m-2 open">
                      <h3>Data Scientist</h3>
                      <p>
                        A machine learning (ML) developer is an expert on using data to
                        training models. The models are then used to automate processes
                        like image classification, speech recognition, and market
                        forecasting.
                      </p>
                      <img
                        src="https://s40424.pcdn.co/in/wp-content/uploads/2022/09/data-science.jpg.optimal.jpg"
                        alt="loading"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }

