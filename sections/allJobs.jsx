import styles from '@styles/sections/allJobs.module.css';

import JobBox from '@components/jobBox'

const AllJobs = () => {
    return (
        <div className={styles.container}>
            <JobBox />
            <JobBox />
            <JobBox />
            <JobBox />
            <JobBox />
        </div>
    )
}

export default AllJobs;