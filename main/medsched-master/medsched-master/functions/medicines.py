from pymongo import MongoClient

client = MongoClient(
    'mongodb+srv://acharysantheep:TNwWHuJVPb0gd3q4@cluster0.brpxbkd.mongodb.net/?retryWrites=true&w=majority')
db = client['medicine_schedule']
users = db['users']
scheduledb = db['schedule']


def get_all_medicines(user):
    document = scheduledb.find_one({"_id": user.lower()})
    medicines = document['medicines']
    list = []
    for medicine in medicines:
        list.append(medicine.title())
    return list


def medicine_card(medicine, price, href):
    card = f"""<div class="flex flex-col card rounded-lg my-5 p-3 shadow-md">
                  <p class="text-gray-800 my-3">{medicine.title()}</p>
                  <div class="flex">
                  <a href='{href}' target='_blank'>
                    <button class="bg-primary-blue-light text-white p-1 rounded-lg flex">
                      <i class="fas fa-external-link-alt mt-1.5 mx-1"></i>
                      <p class="mt-1 font-medium">₹{price} | Buy now</p>
                    </button></a>
                  </div>
                </div>"""
    return card
