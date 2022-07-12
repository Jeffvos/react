import Card from '../components/shared/Card';

function AboutPage() {
  return (
    <Card> 
        <div className='about'>
            <h1>About this Project</h1>
            <p>this is a react app to leave feedback for a product or service</p>
            <p>Version 1.1.1</p>
            <p>
                <a href="/">Back to home</a>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage