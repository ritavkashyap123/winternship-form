import React, { useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Events = () => {
  const [timeline, setTimeline] = useState(true);
  const [marketing, setMarketing] = useState(true);
  const [hackathon, setHackathon] = useState(true);
  const [sales, setSales] = useState(true);
  const [design, setDesign] = useState(true);

  const toggleTimeline = () => {
    setTimeline(!timeline);
  };
  const toggleMarketing = () => {
    setMarketing(!marketing);
  };
  const toggleHackathon = () => {
    setHackathon(!hackathon);
  };
  const toggleSales = () => {
    setSales(!sales);
  };
  const toggleDesign = () => {
    setDesign(!design);
  };

  return (
    <div>
      <div className="box">
        <div className="head">Event Details</div>
      </div>
      <div className="box">
        <div className="head1" onClick={toggleTimeline}>
          Timeline
          {timeline ? (
            <FaChevronDown fontSize={"1.5rem"} />
          ) : (
            <FaChevronUp fontSize={"1.5rem"} />
          )}
        </div>
        {!timeline && (
          <ul>
            <li>
              <div className="head2">
                <b>15th Jan 2024 </b>
                <br />
                Announcement and registration for Winternship
              </div>
            </li>
            <li>
              <div className="head2">
                <b>17th Jan 2024</b> <br />
                1st phase of screening
              </div>
            </li>
            <li>
              <div className="head2">
                <b>25th Jan 2024</b> <br />
                Closing date for submission of solutions for the 1st phase of
                screening
              </div>
            </li>
            <li>
              <div className="head2">
                <b>29th Jan 2024</b> <br />
                Announcement of result for 1st round of screening.
              </div>
            </li>
            <li>
              <div className="head2">
                <b>2nd Feb 2024</b> <br />
                9:30 am- 10:00 am- Felicitation Programme for Dignitaries <br />
                10:00 am- 10:45 am – Speech by Dignitaries <br />
                10:45 am- 11:00 am - Tea Break <br />
                11:00 am- 12:00 pm – Speech by Dignitaries (continues) <br />
                12:15 pm- 1:15 pm - Lunch Break <br />
                1:30 pm- 5:30 pm- Competitions for Marketing, Sales, Web
                Development and Designing <br />{" "}
              </div>
            </li>
            <li>
              <div className="head2">
                <b>3rd Feb 2024</b>
                <br />
                9:30 am- 10:15 am - Prize Distribution <br />
                10:15 am- 10:30 am- Tea Break <br />
                10:30 am- 12:00 pm- Panel Discussion <br />
                12:15 pm- 1:15 pm Lunch Break <br />
                1:30 pm-2:30 pm- Networking events <br />
                2:30 pm- 6:30 pm- Interviews{" "}
              </div>
            </li>
            <div className="head1"></div>
          </ul>
        )}
      </div>
      <div className="box">
        <div className="head1" onClick={toggleMarketing}>
          Marketing Event Details
          {marketing ? (
            <FaChevronDown fontSize={"1.5rem"} />
          ) : (
            <FaChevronUp fontSize={"1.5rem"} />
          )}
        </div>
        {!marketing && (
          <>
            <div className="head2">
              It will be in 2 phases <br />
              <b>Phase 1:</b> will be 9 days starting from Jan 17th to Jan 25th.
              The result will be announced on Jan 29th. The top 15 individuals
              will be selected.
              <br />
              <b>Phase 2:</b> will be on Feb 2nd when the screening/pitching of
              the qualified individuals will be done.
            </div>
            <div className="head2">
              <b>Topic for Phase 1-</b>
              Marketing and advertisement idea for a clothing brand (Submit a
              writeup in word file/pdf)
              <ul>
                <li>
                  <b>Topic: </b>
                  Pitch a marketing strategy and an ad campaign for a clothing
                  brand that claims to be fast fashion but to be sustainable and
                  to reduce wastage they operate on a cloth rental model.
                </li>
                <li>
                  <b>Points to consider:</b>
                  Customer segmentation, communication channels, brand value,
                  promote sustainability, creative ideas for the advertisement.
                </li>
              </ul>
            </div>
            <div className="head2">
              {" "}
              <b>Judging criteria:</b>
              <ul>
                <li>
                  Align the strategies with the target audience's values and
                  preferences.
                </li>
                <li>
                  Choose multiple channels for communication with customers.
                </li>
                <li>
                  Ensure clarity in conveying the brand's sustainable and fast
                  fashion aspects.
                </li>
                <li>
                  Focus on creating a narrative that connects emotionally with
                  viewers.
                </li>
                <li>
                  Keep the messaging concise and impactful, leaving a lasting
                  impression on the audience.
                </li>
                <li>No use of Chat GPT, Google Bard or any other AI Models</li>
              </ul>
            </div>
            <div className="head2">
              <b>General Guideline:</b>
              <ul>
                <li>
                  Every student must submit their piece of writing for phase 1
                  as shared on 17th Jan 2024 in the repository link latest by
                  25th Jan 2024. The selected ones will get the chance to
                  participate in phase 2.
                </li>
                <li>
                  15 students will be selected for Marketing and Sales each for
                  phase 2.
                </li>
                <li>
                  Participants should be a student of any recognized academic
                  institution.
                </li>
                <li>
                  Use of Chat GPT, Google Bard or any other AI model is strictly
                  prohibited. If found guilty will be disqualified.
                </li>
                <li>
                  Questions for phase 2 will be provided at the venue, kindly
                  carry your pen along.
                </li>
                <li>Phase 2 will have 2 activities for each.</li>
                <li>
                  5 minutes will be allocated to pitch for the marketing and
                  sales prompt (prompt to be given at the venue) and 3 more
                  minutes of Q&A round.
                </li>
                <li>
                  In case of any disputes or discrepancies, the decision of the
                  organizing body is final and binding.
                </li>
                <li>
                  The organizing team has the right to disqualify any team at
                  its sole discretion.
                </li>
              </ul>
            </div>
            <Link
              className="input"
              to="/Winternship-Marketing-Event.pdf"
              target="_blank"
            >
              Rulebook is here
              <BsBoxArrowUpRight />
            </Link>
          </>
        )}
      </div>
      <div className="box">
        <div className="head1" onClick={toggleHackathon}>
          {" "}
          Tech Event Details
          {hackathon ? (
            <FaChevronDown fontSize={"1.5rem"} />
          ) : (
            <FaChevronUp fontSize={"1.5rem"} />
          )}
        </div>
        {!hackathon && (
          <>
            <div className="head2">
              It will be in 2 phases <br />
              <b>Phase 1:</b> will be 9 days starting from Jan 17th to Jan 25th.
              The result will be announced on Jan 29th. Two teams from each
              problem statement will be selected.
              <br />
              <b>Phase 2:</b> will be on 2nd Feb when the screening/pitching of
              the qualified teams will be done. Accommodation for those teams
              will be provided.
            </div>
            <div className="head2">
              <b>Topics</b>
              <ol>
                <li>
                  <b>E-commerce website</b>
                  <ul>
                    <li>Portfolio: A basic portfolio website</li>
                    <li>
                      Shop: Listing of different products and payment
                      integration
                    </li>
                    <li>
                      Dashboard: Analytics, order received/delivered, stock
                      items etc.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Job-portal website</b>
                  <ul>
                    <li>
                      Portfolio: A basic portfolio website and Job Listing
                    </li>
                    <li>
                      Company Dashboard: Analytics with graphs, Profiles and
                      post new jobs
                    </li>
                    <li>
                      Applicant Dashboard: Analytics with graphs, Profiles and
                      applied job status
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Social Media Website / App</b>
                  <ul>
                    <li>
                      A Social media website where photos/videos can be uploaded
                      with a caption
                    </li>
                    <li>Real-time messaging feature with different people.</li>
                    <li>Add likes and comment features.</li>
                  </ul>
                </li>
                <li>
                  <b>Food Delivery Website / App</b>
                  <ul>
                    <li>
                      Select food items and add them to the cart to place an
                      order.
                    </li>
                    <li>Payment integration.</li>
                    <li>
                      Homepage with categories like items, shops, dishes etc.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Travel Site with Ticket Booking</b>
                  <ul>
                    <li>
                      Different types of tracks are shown on the portfolio
                      website
                    </li>
                    <li>Dashboard to see updates</li>
                    <li>
                      Hotels and bus/train ticket booking features should
                      included
                    </li>
                    <li>Payment integration</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="head2">
              {" "}
              <b>Judging criteria:</b>
              <br />
              The final evaluation will be based on 4 criteria
              <ul>
                <li>
                  Technology: How technically impressive was the solution? Was
                  the technical problem the team tackled difficult?
                </li>
                <li>
                  Design: Did the team put thought into the user experience? How
                  well-designed is the interface?
                </li>
                <li>
                  Completion: Does the application work? Did the team achieve
                  everything they wanted?
                </li>
                <li>
                  Learning: Did the team stretch themselves? Did they try to
                  learn something new?
                </li>
              </ul>
            </div>
            <div className="head2">
              <b>General Guideline:</b>
              <ul>
                <li>
                  Every team must submit an abstract along with the GitHub
                  repository link on the 1st day of joining the Hackathon
                </li>
                <li>
                  At the end of phase 1 i.e. Jan 25, every team must submit a
                  report with a video presentation showing the product's
                  working. The further selected teams may do modifications to
                  their product for phase 2
                </li>
                <li>The teams may consist of 1 to 3 members.</li>

                <li>
                  The organizing committee will supply strong wifi and extension
                  cables for internet and electricity; however, participants are
                  encouraged to bring their extension cables and maintain a
                  reliable internet connection as a backup.
                </li>
                <li>
                  All the members of qualified teams should be present during
                  phase 2
                </li>
                <li>
                  Teams can use libraries, frameworks, or open-source code in
                  their projects.
                </li>
                <li>
                  A new GitHub repo must be made and daily updates/commits will
                  be checked during phase 1.
                </li>
                <li>
                  The commit timings will be analyzed deeply to determine the
                  work's authenticity.
                </li>
                <li>
                  In case of any disputes or discrepancies, the decision of the
                  organizing body is final and binding.
                </li>
                <li>
                  The organizing team has the right to disqualify any team at
                  its sole discretion
                </li>
              </ul>
            </div>
            <Link
              className="input"
              to="/Winternship-Tech-Event.pdf"
              target="_blank"
            >
              Rulebook is here
              <BsBoxArrowUpRight />
            </Link>
          </>
        )}
      </div>
      <div className="box">
        <div className="head1" onClick={toggleSales}>
          {" "}
          Sales Event Details
          {sales ? (
            <FaChevronDown fontSize={"1.5rem"} />
          ) : (
            <FaChevronUp fontSize={"1.5rem"} />
          )}
        </div>
        {!sales && (
          <>
            <div className="head2">
              It will be in 2 phases <br />
              <b>Phase 1:</b> will be 9 days starting from Jan 17th to Jan 25th.
              The result will be announced on Jan 29th. The top 15 individuals
              will be selected.
              <br />
              <b>Phase 2:</b> will be on Feb 2nd when the screening/pitching of
              the qualified individuals will be done.
            </div>
            <div className="head2">
              <b>Topic for Phase 1-</b>
              Creative writing for the role of a salesperson (Creative writing)
              (Making your words count)
              <ul>
                <li>
                  <b>Topic: </b>
                  You are the salesperson of a company selling bottled water and
                  your salary is based on the number of bottles you sell. Write
                  a pitch on your sales strategy.
                </li>
                <li>
                  <b>Points to consider:</b>
                  Increase the number of sales, channels to sell, places to
                  sell, partnerships
                </li>
              </ul>
            </div>
            <div className="head2">
              {" "}
              <b>Judging criteria:</b>
              <ul>
                <li>Knowing your target audience</li>
                <li>Clarity and Simplicity</li>
                <li>Strong Call to Action</li>
                <li>Unique Selling Proposition</li>
                <li>Tone matching with brand personality</li>
                <li>No use of Chat GPT, Google Bard or any other AI Models</li>
              </ul>
            </div>
            <div className="head2">
              <b>General Guideline:</b>
              <ul>
                <li>
                  Every student must submit their piece of writing for phase 1
                  as shared on 17th Jan 2024 in the repository link latest by
                  25th Jan 2024. The selected ones will get the chance to
                  participate in phase 2.
                </li>
                <li>
                  15 students will be selected for Marketing and Sales each for
                  phase 2.
                </li>
                <li>
                  Participants should be a student of any recognized academic
                  institution.
                </li>
                <li>
                  Use of Chat GPT, Google Bard or any other AI model is strictly
                  prohibited. If found guilty will be disqualified.
                </li>
                <li>
                  Questions for phase 2 will be provided at the venue, kindly
                  carry your pen along.
                </li>
                <li>Phase 2 will have 2 activities for each.</li>
                <li>
                  5 minutes will be allocated to pitch for the marketing and
                  sales prompt (prompt to be given at the venue) and 3 more
                  minutes of Q&A round.
                </li>
                <li>
                  In case of any disputes or discrepancies, the decision of the
                  organizing body is final and binding.
                </li>
                <li>
                  The organizing team has the right to disqualify any team at
                  its sole discretion.
                </li>
              </ul>
            </div>
            <Link
              className="input"
              to="/Winternship-Sales-Event.pdf"
              target="_blank"
            >
              Rulebook is here
              <BsBoxArrowUpRight />
            </Link>
          </>
        )}
      </div>
      <div className="box">
        <div className="head1" onClick={toggleDesign}>
          {" "}
          Design Event Details
          {design ? (
            <FaChevronDown fontSize={"1.5rem"} />
          ) : (
            <FaChevronUp fontSize={"1.5rem"} />
          )}
        </div>
        {!design && (
          <>
            <div className="head2">
              It will be in 2 phases <br />
              <b>Phase 1:</b> will be 9 days starting from Jan 17th to Jan 25th.
              The result will be announced on Jan 29th. The top 15 individuals
              will be selected.
              <br />
              <b>Phase 2:</b> will be on Feb 2nd when the screening/pitching of
              the qualified individuals will be done.
            </div>
            <div className="head2">
              <b>Topic for Phase 1-</b>

              <ol>
                <li>
                  <b>Company: Samsung (Product Launch)</b>
                  <ul>
                    <li>
                      Design an attention-grabbing poster for Samsung's latest
                      product launch.
                    </li>
                    <li>
                      Incorporate sleek visuals of the new device, feature the
                      Samsung logo prominently, and convey a sense of
                      cutting-edge technology and innovation.
                    </li>
                    <li>
                      The poster should generate anticipation and excitement for
                      the new product.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Company: Fitbit (New Year's Fitness Resolution)</b>
                  <ul>
                    <li>
                      Design a motivational poster for Fitbit, promoting fitness
                      resolutions for the New Year.
                    </li>
                    <li>
                      Showcase Fitbit devices, incorporate the brand logo, and
                      use imagery that inspires a healthy and active lifestyle.
                    </li>
                    <li>
                      The poster should encourage individuals to kickstart the
                      year with their fitness goals using Fitbit.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Company: Uber Eats (Valentine's Day Special)</b>
                  <ul>
                    <li>
                      Create a romantic poster for Uber Eats' Valentine's Day
                      Special, featuring heartwarming visuals of delicious meals
                      and desserts.
                    </li>
                    <li>
                      Incorporate the Uber Eats logo and showcase special
                      Valentine's Day offers.
                    </li>
                    <li>
                      The poster should evoke a sense of love and convenience,
                      encouraging customers to celebrate the day with delightful
                      food.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="head2">
              {" "}
              <b>Judging criteria:</b>
              <ul>
                <li>Knowing your target audience</li>
                <li>Visual Appeal of Presentation Materials.</li>
                <li>Communication of Objective and Significance.</li>
                <li>Explanation of Project Design and Methodology.</li>
              </ul>
            </div>
            <div className="head2">
              <b>General Guideline:</b>
              <ul>
                <li>
                  Every student must submit 1 Design for phase 1 as shared on
                  17th Jan 2024 in the repository link latest by 25th Jan 2024.
                  The selected ones will get the chance to participate in phase
                  2.
                </li>
                <li>
                  15 students will be selected for DESIGN EVENT each for phase
                  2.
                </li>
                <li>
                  Participants should be a student of any recognized academic
                  institution
                </li>
                <li>
                  Participants are only allowed to use Adobe Illustrator, Adobe
                  Photoshop & Figma.
                </li>
                <li>
                  Use of CANVA is strictly prohibited. If found guilty will be
                  disqualified.
                </li>
                <li>
                  Topics for phase 2 will be provided at the venue, kindly carry
                  your Laptop along.
                </li>
                <li>Phase 2 will have 2 topics.</li>
                <li>
                  The participant should send their original file along with the
                  png file of the poster.
                </li>
                <li>
                  In case of any disputes or discrepancies, the decision of the
                  organizing body is final and binding.
                </li>
                <li>
                  The organizing team has the right to disqualify any team at
                  its sole discretion.
                </li>
              </ul>
            </div>
            <Link
              className="input"
              to="/Winternship-Design-Event.pdf"
              target="_blank"
            >
              Rulebook is here
              <BsBoxArrowUpRight />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Events;
