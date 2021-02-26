import React from 'react';
import { Card, Button, OverlayTrigger, Popover } from "react-bootstrap";
import { FaInfoCircle } from 'react-icons/fa';
import fitness_tracker_img from '../../Images/fitness_tracker.png';

export default function Projects() {
    return (
        <>
<div className="testing-div"></div>

<section id="projects"><h1>Projects</h1></section>
<div className="projects-card-container">
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="Project-2.png" />
        <Card.Body>
            <Card.Title>Movie Favorites 
{['right' ].map((placement) => (
<OverlayTrigger
trigger="click"
key={placement}
placement={placement}
overlay={
<Popover id={`popover-positioned-${placement}`}>
<Popover.Title as="h3">{`Movie Favorites`}</Popover.Title>
<Popover.Content>
<strong>
In this project I worked with a team to create an application that would allow a user to create an account and search for movies with an API. The user also has the option to save any searched movies to their "favorites" list. The account the user creates is then saved to a database, so the user can log in at anytime to view saved movies, or add more!
</strong>
</Popover.Content>
</Popover>
}
>
<Button variant="secondary" className="pop-up-btn"><FaInfoCircle /></Button>
</OverlayTrigger>
))}
            </Card.Title>
            <Card.Text>
                <strong>AS </strong> a movie lover <br /> <br />
                <strong>I WANT</strong> an application to easily search for my favorite movies and store them <br /> <br />
                <strong>SO I</strong> can access them anywhere and share them with friends <br /> <br />
</Card.Text>
            <Button variant="primary" href="https://projectdash.herokuapp.com/" target="blank">Click here to see the  application live!</Button>
        </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="utah_views.png" />
        <Card.Body>
            <Card.Title>Utah Views
            {['right' ].map((placement) => (
<OverlayTrigger
trigger="click"
key={placement}
placement={placement}
overlay={
<Popover id={`popover-positioned-${placement}`}>
<Popover.Title as="h3">{`Utah Views`}</Popover.Title>
<Popover.Content>
<strong>
In this project I worked with a team to create an application that would allow a user to create an account and search for hiking trails. Utilizing TrailAPI, users are able to search for any trail accessable in the state of Utah. Users have the option to save any searched trails to their "favorites" list for easy access later on. When an account is created, it is saved to a database and the user can log in at anytime to view saved trails, or add more!
</strong>
</Popover.Content>
</Popover>
}
>
<Button variant="secondary" className="pop-up-btn"><FaInfoCircle /></Button>
</OverlayTrigger>
))}
            </Card.Title>
            <Card.Text>
            <strong>AS </strong> an avid outdoorsman <br /> <br />
                <strong>I WANT</strong> an application to easily search for my favorite trails in Utah and save them <br /> <br />
                <strong>SO I</strong> can find new places to explore <br /> <br />
</Card.Text>
<Button variant="primary" href="https://utahviews.herokuapp.com/" target="blank">Click here to see the  application live!</Button>
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="Google_Books_API_App.png" />
        <Card.Body>
            <Card.Title>Google Books
            {['right' ].map((placement) => (
<OverlayTrigger
trigger="click"
key={placement}
placement={placement}
overlay={
<Popover id={`popover-positioned-${placement}`}>
<Popover.Title as="h3">{`Google Books`}</Popover.Title>
<Popover.Content>
<strong>
An easy way to search your favorite books and where you can buy them. In this project, I utilized google's book API to get information on a searched book. You can view the book online and find where to buy the full book. Have a favorite book? Click favorite to save that book as a favorite for easy access later on!
</strong>
</Popover.Content>
</Popover>
}
>
<Button variant="secondary" className="pop-up-btn"><FaInfoCircle /></Button>
</OverlayTrigger>
))}
            </Card.Title>
            <Card.Text>
            <strong>AS </strong> a book lover <br /> <br />
                <strong>I WANT</strong> an application to easily search for my favorite books <br /> <br />
                <strong>SO I</strong> can find where to buy or read them online <br /> <br />
</Card.Text>
            <Button variant="primary" href="https://immense-wildwood-67889.herokuapp.com/" target="blank">Click here to see the  application live!</Button>
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="password_generator.jpeg" />
        <Card.Body>
            <Card.Title>Password Generator
            {['left' ].map((placement) => (
<OverlayTrigger
trigger="click"
key={placement}
placement={placement}
overlay={
<Popover id={`popover-positioned-${placement}`}>
<Popover.Title as="h3">{`Password Generator`}</Popover.Title>
<Popover.Content>
<strong>
In this project I created a password generator. When the red "Generate Password" button is clicked, you will be prompted with a series of questions regarding how unique you would like your password. Once you have answered all the questions, your random password will be shown in the box above the red "Generate Password" button.
</strong>
</Popover.Content>
</Popover>
}
>
<Button variant="secondary" className="pop-up-btn"><FaInfoCircle /></Button>
</OverlayTrigger>
))}
            </Card.Title>
            <Card.Text>
            <strong>AS </strong> someone with multiple accounts online <br /> <br />
                <strong>I WANT</strong> an application to generate me a password <br /> <br />
                <strong>SO I</strong> do not have to think of a new one everytime I need to change my password or create a new account <br /> <br />
</Card.Text>
            <Button variant="primary" href="https://robbie2497.github.io/password_generator-homework/" target="blank">Click here to see the  application live!</Button>
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={fitness_tracker_img} />
        <Card.Body>
            <Card.Title>Fitness Tracker
            {['right' ].map((placement) => (
<OverlayTrigger
trigger="click"
key={placement}
placement={placement}
overlay={
<Popover id={`popover-positioned-${placement}`}>
<Popover.Title as="h3">{`Fitness Tracker`}</Popover.Title>
<Popover.Content>
<strong>
In this application, a user can create a new workout or continue a previous workout. Each workout recorded is tracked day by day and different types of graphs are displayed to show the user's progress in a simple visual representation.
</strong>
</Popover.Content>
</Popover>
}
>
<Button variant="secondary" className="pop-up-btn"><FaInfoCircle /></Button>
</OverlayTrigger>
))}
            </Card.Title>
            <Card.Text>
            <strong>AS </strong> someone who uses excersise to maintain a healthy lifestyle <br /> <br />
                <strong>I WANT</strong> an application to record my workouts <br /> <br />
                <strong>SO I</strong> can easily keep track of my progress <br /> <br />
</Card.Text>
            <Button variant="primary" href="https://stark-headland-73843.herokuapp.com/" target="blank">Click here to see the  application live!</Button>
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://blog.rescuetime.com/wp-content/uploads/2018/01/photo-1506485338023-6ce5f36692df-1000x486.jpeg" />
        <Card.Body>
            <Card.Title>Daily Scheduler
            {['right' ].map((placement) => (
<OverlayTrigger
trigger="click"
key={placement}
placement={placement}
overlay={
<Popover id={`popover-positioned-${placement}`}>
<Popover.Title as="h3">{`Daily Scheduler`}</Popover.Title>
<Popover.Content>
<strong>
In this project I created a daily 9 to 5 schedule application. You can enter text into the desired time
                frame and press the save button to save text to the local storage to prevent it from deleting when the page is
                refreshed. I also added a clear button to remove the text in one single click. As the day moves on,
                the text box will change colors. Green for future time, Red for current time, and gray for past time.
</strong>
</Popover.Content>
</Popover>
}
>
<Button variant="secondary" className="pop-up-btn"><FaInfoCircle /></Button>
</OverlayTrigger>
))}
            </Card.Title>
            <Card.Text>
            <strong>AS </strong> someone with a busy lifestyle <br /> <br />
                <strong>I WANT</strong> an application to help me keep track of my schedule each day <br /> <br />
                <strong>SO I</strong> can stop thinking to myself "Is there something I was supposed to do today?" <br /> <br />
</Card.Text>
            <Button variant="primary" href="https://robbie2497.github.io/work_day_scheduler-homework/" target="blank">Click here to see the  application live!</Button>
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.poolparty.biz/wp-content/uploads/2018/06/SEMANTiCS-who-should-attend.png" />
        <Card.Body>
            <Card.Title>Semantics
            {['right' ].map((placement) => (
<OverlayTrigger
trigger="click"
key={placement}
placement={placement}
overlay={
<Popover id={`popover-positioned-${placement}`}>
<Popover.Title as="h3">{`Semantics`}</Popover.Title>
<Popover.Content>
<strong>
In this project I took pre-developed website which had many bugs and was not accessible. Each element
                in the HTML was set to div, so it wasn't very sematic. I refactored the code using semantics to make
                the website more accessible. This was a challenging yet rewarding activity as I searched through the
                code looking for ways to fix the bugs, and how to change the elements so that they were semantically
                correct.
</strong>
</Popover.Content>
</Popover>
}
>
<Button variant="secondary" className="pop-up-btn"><FaInfoCircle /></Button>
</OverlayTrigger>
))}
            </Card.Title>
            <Card.Text>
            <strong>AS </strong> a business owner <br /> <br />
                <strong>I WANT</strong> a developer to know how to use other element tags than div <br /> <br />
                <strong>SO I</strong> am positive that each and every user has an appreciable experience when using the company website <br /> <br />                
</Card.Text>
            <Button variant="primary" href="https://robbie2497.github.io/accessability-homework/" target="blank">Click here to see the  application live!</Button>
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="foodtruck.png" />
        <Card.Body>
            <Card.Title>Foodtruck
            {['left' ].map((placement) => (
<OverlayTrigger
trigger="click"
key={placement}
placement={placement}
overlay={
<Popover id={`popover-positioned-${placement}`}>
<Popover.Title as="h3">{`Foodtruck`}</Popover.Title>
<Popover.Content>
<strong>
In this project I worked with a small team to create an application that would allow a foodtruck owner to display their business online with an option for customers to order ahead of time from their menu. With implementaion of the Google Maps API and a weather API, the food truck's location will update with current weather reports.
</strong>
</Popover.Content>
</Popover>
}
>
<Button variant="secondary" className="pop-up-btn"><FaInfoCircle /></Button>
</OverlayTrigger>
))}
            </Card.Title>
            <Card.Text>
            <strong>AS </strong> a foodtruck owner <br /> <br />
                <strong>I WANT</strong> a website with the location of my truck <br /> <br />
                <strong>SO I</strong> can give my customers the greatest satisfaction by being able to view the menu and place orders ahead of time  <br /> <br />
</Card.Text>
            <Button variant="primary" href="https://robbie2497.github.io/Project-1/" target="blank">Click here to see the  application live!</Button>
        </Card.Body>
    </Card>

</div>
        </>
    )
}
