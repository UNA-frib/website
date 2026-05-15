import { ActivitySection } from '../../sections/activity-section';
import { reader } from '../reader';

export default async function Homepage() {
 const pageData = await reader.singletons.homePage.read();

  return (
    <>
      {pageData?.title?.length && (
        <h1>
          {pageData?.title}
        </h1>
      )}
      <div>
        <ActivitySection />
      </div>
    </>
  );
}
