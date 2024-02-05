import './App.css'
import Content from './ContentBlock.jsx'
import Experience from './ExperienceComponent.jsx'
const skills = "Analytical Skills: Proficient in supervised and unsupervised machine learning algorithms and time series analysis for clustering, trend analysis and predictive modeling.Skilled in extracting meaningful insights, optimizing data processes,and enhancing data-driven decision-making using SQL. Python and Power BI. <br /> Statistics: In-depth knowledge of influential statistics, hypothesis testing, and regression analysis.<br></br>Data Modeling: Experience in data modeling and preprocessing, feature engineering, and exploratory data analysis (EDA).<br></br>Tools and Technologies: Proficient in Python (Scikit Learn, Pandas, Seaborn, Regex, Numpy ), SQL, and MLOPS practices. Experience with Power BI for data analysis and dashboard building"

function App() {

  return (
  <>
  <h1 className='display-1 text-primary' >Lokesh Kharkwal</h1><br />

  <h1  className='display-1 fs-1'>Experience</h1>
  <Experience></Experience><br />
  <h1  className='display-1 fs-1'>Skills</h1>

 
  <Content heading="" content={skills}/>
  <br />


<Content heading=" " content="Worked with the Data Science and Research team which results in a remarkable 35% reduction in fraud and a substantial 24% increase in overall sales.
Received 'Intern of the Month' recognition for my role in developing a data pipeline which helps in the streamline flow of data.
Analyzing customer behavior patterns and creating advanced algorithms to drive actionable insights.
Develop and maintain data pipelines to streamline data processing, enabling faster and more efficient model prediction.
Collaborating with cross-functional teams to develop data-driven solutions and optimize operational processes.
Presenting findings and actionable insights to foreign stakeholders, driving strategic decision-making." />

  </>)


} 
export default App