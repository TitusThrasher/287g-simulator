import Scene from '../components/Scene';
import Dialogue from '../components/Dialogue';
import Tooltip from '../components/Tooltip';
import DatabaseQuery from '../components/DatabaseQuery';
import ScenarioContent from '../components/ScenarioContent';
import StatCallout from '../components/StatCallout';

export default function Scene4_TheBooking({ scenario }) {
  return (
    <Scene number={4} title="The Booking" time="11:15 PM" elapsed="+1 hr 28 min" scenario={scenario}>
      <p>
        The county jail. Fluorescent lights. A long counter. Carlos is photographed, fingerprinted,
        and asked to empty his pockets. His watch, wallet, and phone are placed in a plastic bag
        and labeled.
      </p>

      <Dialogue speaker="Booking Officer">One phone call. Make it count.</Dialogue>

      <p>
        Carlos calls his wife, Elena. He tells her where he is. He tells her it's a misdemeanor,
        that he'll probably be out by morning if she can arrange bail. He can hear his 4-year-old
        asking in the background why Daddy isn't home yet.
      </p>

      <Dialogue speaker="Carlos">I'll be home soon. Don't worry. It's a mistake.</Dialogue>

      <div className="my-6 border-t border-slate-300 pt-6">
        <div className="text-sm uppercase tracking-wide text-slate-500 mb-3">
          Meanwhile, behind the counter...
        </div>
      </div>

      <ScenarioContent
        scenario={scenario}
        none={
          <>
            <p>
              Carlos's fingerprints are submitted to the FBI's criminal database—standard procedure
              for all bookings nationwide. The FBI checks for outstanding warrants and criminal
              history.
            </p>
            <p>The search comes back clean. Carlos has no criminal record.</p>
            <p>
              No one at the jail queries immigration databases. No one contacts ICE. No one asks
              Carlos where he was born.
            </p>
            <div className="my-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="font-medium text-green-800">What happens next</div>
              <div className="flex justify-center my-3">
                <StatCallout number="8 hrs" label="Total Time in Custody" color="green" size="sm" />
              </div>
              <p className="text-green-700 text-sm mt-1">
                Carlos is held overnight. In the morning, Elena arrives with bail money. Carlos is
                released. He goes home, showers, and takes his kids to school—barely on time for
                the play.
              </p>
            </div>
          </>
        }
        jem={
          <>
            <p>
              Carlos's fingerprints are submitted to the FBI's criminal database—standard procedure
              for all bookings nationwide.
            </p>
            <p>But in this county, that's not where the process ends.</p>
            <p>
              A{' '}
              <Tooltip term="287(g)-designated officer">
                A local jail employee who has completed ICE's four-week training program and is
                authorized to perform specific immigration enforcement functions—including querying
                DHS databases and initiating detainer requests.
              </Tooltip>{' '}
              reviews all overnight bookings each morning. As part of that review, fingerprints are
              also run through DHS databases: IDENT, which contains immigration records, and the ICE
              enforcement database.
            </p>
            <p>
              The query returns:{' '}
              <strong>CARLOS MENDEZ. LPR. ADMITTED 2003. NO PRIOR IMMIGRATION VIOLATIONS.</strong>
            </p>
            <p>
              The 287(g) officer reviews the case: green card holder, misdemeanor marijuana, no
              criminal history. Under current enforcement priorities, this could go either way. The
              officer sends Carlos's information to the local ICE field office.
            </p>
            <div className="my-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="font-medium text-amber-800">What happens next</div>
              <p className="text-amber-700 text-sm mt-1">
                Carlos's fate now depends on an ICE officer's decision. Will they lodge a
                detainer—a request to hold Carlos for up to 48 hours beyond his scheduled
                release—so ICE can pick him up? Or will they decline, and let Carlos go home to his
                family?
              </p>
            </div>
          </>
        }
        tfm={
          <>
            <p>
              The booking officer already has the deputy's arrest report, which notes that Carlos's
              immigration status was checked at the scene.
            </p>
            <p>
              <strong>Immigration status: LPR - verified via IDENT query</strong>
            </p>
            <p>
              In Task Force counties, ICE is often notified before booking is even complete. The
              deputy's query at the roadside was logged, and ICE's system automatically flagged the
              subsequent arrest.
            </p>
            <p>
              By the time Carlos is photographed and fingerprinted, an ICE officer at the regional
              field office has already reviewed his file.
            </p>
            <div className="my-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="font-medium text-red-800">What happens next</div>
              <p className="text-red-700 text-sm mt-1">
                A detainer is lodged before midnight. When Elena arrives with bail money at 7:15 AM,
                she's told Carlos can't be released.
              </p>
              <p className="text-red-600 text-xs mt-2 italic">
                "There's an immigration hold. You'll need to talk to ICE."
              </p>
            </div>
          </>
        }
      />

      <DatabaseQuery scenario={scenario} stage="booking" />
    </Scene>
  );
}
