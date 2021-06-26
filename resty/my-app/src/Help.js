import './Help.scss'

function Help(props) {
  return (
    <>
      <h4> How to use this website !</h4>

      <ul>
        <li> Input your API Url that you want to get data from. </li>
        <li> Choose the HTTP method that you want (Default GET)</li>
        <li>Hit Go button.</li>

        <li>You can see the results and list of recent requests.</li>

        <li>
          In History tab you can see a full-detail about your search and you can
          hit Request again to resend the same request.
        </li>

        <p> Done By: Nihad Zeidan</p>
      </ul>
    </>
  );
}


export default Help;