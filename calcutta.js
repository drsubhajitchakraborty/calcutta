const calcutta = {
    shortHistory : "Here's a brief history of Calcutta (formerly known as Kolkata):\n\nEarly History:\n\
                    The area around Kolkata has been inhabited for centuries, with evidence of human settlements dating back to ancient times. \
                    The region was originally part of the kingdoms of Bengal and later came under the control of various dynasties including the Mauryans, Guptas, and Palas.\n\n\
                    Colonial Era:\n\
                    The city of Kolkata gained prominence during the colonial era. In 1690, the English East India Company established a trading post here, which eventually grew into a major colonial settlement. \
                    The city's growth was facilitated by its strategic location on the banks of the Hooghly River and its proximity to the Bay of Bengal.\n\n\
                    Capital of British India:\n\
                    Kolkata became the capital of British India in 1772, replacing Murshidabad. It remained the center of British colonial administration for almost a century. \
                    The British established many administrative buildings, institutions, and trading centers, making Kolkata a hub of commerce and culture.\n\n\
                    Cultural and Intellectual Hub:\n\
                    Kolkata became a center of cultural and intellectual activity during the 19th and early 20th centuries. It was home to renowned figures such as Rabindranath Tagore, who won the Nobel Prize in Literature, \
                    and Swami Vivekananda, a prominent spiritual leader. The Bengal Renaissance, a period of cultural revitalization, had a significant impact on the city's identity.\n\n\
                    Struggle for Independence:\n\
                    Kolkata played a vital role in India's struggle for independence from British rule. The city witnessed several important events, including the Bengal Partition in 1905, \
                    which led to widespread protests and eventually the reunification of Bengal in 1911. The Salt March, led by Mahatma Gandhi, also had a significant impact on the city.\n\n\
                    Post-Independence Era:\n\
                    After India gained independence in 1947, Kolkata continued to be an important cultural and economic center. However, over time, economic stagnation, political instability, \
                    and administrative challenges led to a decline in its prominence. Many businesses and industries moved away, and the city faced infrastructural issues.\n\n\
                    Renaming and Modern Kolkata:\n\
                    In 2001, the city's name was officially changed from Calcutta to Kolkata, reflecting its local pronunciation. In recent years, efforts have been made to revitalize the city's economy and infrastructure. \
                    Kolkata remains a major cultural and educational hub in India, known for its literature, arts, festivals, and historical landmarks.\n\n\
                    Overall, Kolkata's history is rich and multifaceted, marked by colonial influences, cultural renaissance, and significant contributions to India's struggle for independence. \
                    The city's journey from its early days as a trading post to becoming a bustling metropolis is a reflection of India's complex history and evolution.",

    greetings: function (fromCity) {
      var data = "Hello Calcutta, I am from " + fromCity;
      return data;
    },
  
    getShortHistory: function () {
      return this.shortHistory;
    },
  };


module.exports = calcutta;