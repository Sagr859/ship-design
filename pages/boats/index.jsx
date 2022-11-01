import React from 'react'
import styles from '../../styles/Boats.module.css'

export default function index() {

  let boatsArr = [
    { title : 'SWAN Utility Canoe', l : '123', b : '123', c : '123', d : 'ShipTech-ICON brings up a sleek & nimble tripping rescue canoe “Swan”. This classic design canoe is ideal for paddlers of any experience level. Whether you’re a beginner, then Swan is perfect to get started on waters, gives you an easy paddling experience. The canoe is durable, stable & comfortable. Swan Includes comfortable carrying handles. The Swan’s ample capacity will carry a family with kids or enough gear for an extended trip/operation.'},
    { title : 'SWAN Utility Canoe', l : '123', b : '123', c : '123', d : 'ShipTech-ICON brings up a sleek & nimble tripping rescue canoe “Swan”. This classic design canoe is ideal for paddlers of any experience level. Whether you’re a beginner, then Swan is perfect to get started on waters, gives you an easy paddling experience. The canoe is durable, stable & comfortable. Swan Includes comfortable carrying handles. The Swan’s ample capacity will carry a family with kids or enough gear for an extended trip/operation.'},
    { title : 'SWAN Utility Canoe', l : '123', b : '123', c : '123', d : 'ShipTech-ICON brings up a sleek & nimble tripping rescue canoe “Swan”. This classic design canoe is ideal for paddlers of any experience level. Whether you’re a beginner, then Swan is perfect to get started on waters, gives you an easy paddling experience. The canoe is durable, stable & comfortable. Swan Includes comfortable carrying handles. The Swan’s ample capacity will carry a family with kids or enough gear for an extended trip/operation.'},
    { title : 'SWAN Utility Canoe', l : '123', b : '123', c : '123', d : 'ShipTech-ICON brings up a sleek & nimble tripping rescue canoe “Swan”. This classic design canoe is ideal for paddlers of any experience level. Whether you’re a beginner, then Swan is perfect to get started on waters, gives you an easy paddling experience. The canoe is durable, stable & comfortable. Swan Includes comfortable carrying handles. The Swan’s ample capacity will carry a family with kids or enough gear for an extended trip/operation.'},
    { title : 'SWAN Utility Canoe', l : '123', b : '123', c : '123', d : 'ShipTech-ICON brings up a sleek & nimble tripping rescue canoe “Swan”. This classic design canoe is ideal for paddlers of any experience level. Whether you’re a beginner, then Swan is perfect to get started on waters, gives you an easy paddling experience. The canoe is durable, stable & comfortable. Swan Includes comfortable carrying handles. The Swan’s ample capacity will carry a family with kids or enough gear for an extended trip/operation.'},
    { title : 'SWAN Utility Canoe', l : '123', b : '123', c : '123', d : 'ShipTech-ICON brings up a sleek & nimble tripping rescue canoe “Swan”. This classic design canoe is ideal for paddlers of any experience level. Whether you’re a beginner, then Swan is perfect to get started on waters, gives you an easy paddling experience. The canoe is durable, stable & comfortable. Swan Includes comfortable carrying handles. The Swan’s ample capacity will carry a family with kids or enough gear for an extended trip/operation.'}
  ]

  return (
    <div className={styles.boatsLayout}>
      <div className={styles.boatsLayoutHead}>
        Avaialable Boats
      </div>
      <p className={styles.boatsLayoutDesc}>
      The following boats are available with us. We can supply the boats on turn key basis.
      If you need to have a custom made boat or need any further information, please contact us at
      info@ShipTech-ICON.com
      </p>
      <div className={styles.boatsLayoutGrid}>
        {
          boatsArr?.map((el,k) => {
            return (
              <div className={styles.boatsLayoutCard}>
              <div>image carousel</div>
              <div className={styles.boatsCardDesc}>
                <p>{el.title}</p>
                <div className={styles.boatsCardDetDiv}>
                  <div className={styles.boatsCardDetTable}>
                    <div>
                      <div>Length</div><div>{el.l}</div>
                    </div>
                    <div>
                      <div>Breadth</div><div>{el.b}</div>
                    </div>
                    <div>
                      <div>Capacity</div><div>{el.c}</div>
                    </div>
                  </div>
                  <div className={styles.boatsCardDet}>{el.d}</div>
                </div>
              </div>
            </div>
            
            )
          })
        }
        
      </div>
    </div>
  )
}
