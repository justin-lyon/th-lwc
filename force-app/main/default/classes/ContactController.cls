public with sharing class ContactController {

	@AuraEnabled
	public static List<Contact> getContacts () {
		return [
			SELECT Id,
				FirstName,
				LastName,
				Email
			FROM Contact
			ORDER BY LastName
			LIMIT 200];
	}
}
