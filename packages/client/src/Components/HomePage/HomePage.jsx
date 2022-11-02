import React from 'react'
import { volcanoContract, connectWallet, getCurrentWalletConnected, transferred } from '../../util/interactor/volcanoCoinInteractor';

const HomePage = () => {
  return (
    
    <div>
      <div>
        <button onClick={connectWallet}>Connect Wallet</button>
      </div>
      <h2>Transfer Goerli Eth</h2>
      <form
        id="transferForm"
        onSubmit={(e) => {
          e.preventDefault();
          
          const formData = new FormData(e.target);
          const amountIs = formData.get("inputedAmount");
          const recipientIs = formData.get("inputedRecipient");
          
          if(amountIs && recipientIs) {
            try{
              transferred({amountIs, recipientIs});
              
            } catch(e) {
              console.log("error is:", e);
            }
          }
        }}
      >
        <div className='form-group'>
          <label>Amount To Send:</label>
          <input 
            className='form-control'
            type="text"
            step="1"
            name="inputedAmount"
            placeholder="Please enter the amount of Georli Eth you wish to send"
            required
          />
          
        </div>
        <div className='form-group'>
          <label>Goerli Address To Send Eth:</label>
          <input 
            className='form-control'
            type="text"
            step="2"
            name="inputedRecipient"
            placeholder="Please enter the Georli address you wish to send eth to"
            required
          />
        </div>
        <div className='form-group'>
          <input 
            className="btn btn-primary" 
            id="transferButton"
            type="submit" 
            value="Create Token" 
            />
        </div>
      </form>
    </div>
  )
}

export default HomePage